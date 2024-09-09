import { useContext, useState } from 'react';
import { AuthContext, GalleryContext } from 'contexts/Context';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import CustomButton from 'components/customButton/CustomButton';
import { db } from '../../Firebase';
import Footer from 'components/footer/footer';
import Header from 'components/header/Header';
import './GalleryPage.scss';

const GalleryPage = () => {
  const { galleryData, setGalleryData } = useContext(GalleryContext);
  const { userLoggedIn } = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState('');
  const [visibleImages, setVisibleImages] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Добавлено состояние для текущего индекса изображения

  // Add image to gallery
  const addImage = async () => {
    if (imageUrl.trim()) {
      try {
        const docRef = await addDoc(collection(db, 'galleryImages'), {
          url: imageUrl,
          createdAt: new Date(),
        });
        setGalleryData((prev) => [{ id: docRef.id, url: imageUrl }, ...prev]);
        setImageUrl(''); // Clear input field
      } catch (error) {
        console.error('Error adding image: ', error);
      }
    }
  };

  // Remove image from gallery
  const removeImage = async (id) => {
    try {
      await deleteDoc(doc(db, 'galleryImages', id));
      setGalleryData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error removing image: ', error);
    }
  };

  // Handle image click
  const handleImageClick = (url) => {
    const index = galleryData.findIndex((item) => item.url === url);
    setSelectedImage(url);
    setCurrentIndex(index); // Устанавливаем текущий индекс
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0); // Сбрасываем текущий индекс
  };

  // Show more images
  const showMoreImages = () => {
    setVisibleImages((prev) => prev + 6);
  };

  // Switch to the next image
  const nextImage = () => {
    if (galleryData.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
      setSelectedImage(galleryData[(currentIndex + 1) % galleryData.length].url);
    }
  };

  // Switch to the previous image
  const prevImage = () => {
    if (galleryData.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
      setSelectedImage(galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length].url);
    }
  };

  return (
    <>
      <Header />
      <div className="gallery-wrapper">
        <div className="gallery-container">
          <h1>Gallery</h1>
          {userLoggedIn ? (
            <div className="add-image-box">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
              />
              <button onClick={addImage}>Add image</button>
            </div>
          ) : null}
          <div className="gallery">
            {galleryData.slice(0, visibleImages).map((item) => (
              <div className="gallery-item" key={item.id}>
                <img src={item.url} loading="lazy" alt="Gallery" onClick={() => handleImageClick(item.url)} />
                {userLoggedIn ? (
                  <CustomButton className="remove-image" label="Remove" onClick={() => removeImage(item.id)} />
                ) : null}
              </div>
            ))}
          </div>
          {visibleImages < galleryData.length && (
            <CustomButton className="load-more" label="More" onClick={showMoreImages} />
          )}
        </div>
      </div>
      <Footer />
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <span
            className="prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ▲
          </span>
          <img className="modal-content" src={selectedImage} alt="Full Size" />
          <span
            className="next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ▲
          </span>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
