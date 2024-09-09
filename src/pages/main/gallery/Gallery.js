import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { GalleryContext } from 'contexts/Context';
import { useNavigate } from 'react-router-dom';
import './Gallery.scss';

const Gallery = () => {
  const navigate = useNavigate();
  const { galleryData } = useContext(GalleryContext);
  const { t } = useTranslation();
  return (
    <>
      {galleryData.length > 0 && (
        <div className="gallery-wrapper" name="gallery">
          <div className="gallery-label">
            <div className="pre-label">{t('Gallery')}</div>
          </div>
          <div className="gallery-content">
            <div className="gallery-content-width" onClick={() => navigate('/gallery')}>
              {galleryData.slice(0, 6).map((item, index) => (
                <img key={item.id} src={item.url} alt="" className="gallery-image" />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
