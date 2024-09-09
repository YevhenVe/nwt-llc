import React, { useState, createContext, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();
export const ThemeContext = createContext();
export const LoadedContext = createContext();
export const GalleryContext = createContext();

export const ContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [themeSwitch, setThemeSwitch] = useState(() => localStorage.getItem('day-night') === 'true');
  const [loaded, setLoaded] = useState(false);
  const [galleryData, setGalleryData] = useState([]);
  const colorLight = '--color-light';
  const colorDark = '--color-dark';
  const secondColorDark = '--second-color-dark';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
  }

  const value = {
    currentUser,
    userLoggedIn,
  };

  useEffect(() => {
    localStorage.setItem('day-night', themeSwitch);
    if (themeSwitch) {
      document.documentElement.style.setProperty(colorLight, 'rgba(45, 70, 78, 1)');
      document.documentElement.style.setProperty(colorDark, 'rgba(255, 255, 255, 1)');
      document.documentElement.style.setProperty(secondColorDark, 'rgba(46, 70, 78, 1)');
    } else {
      document.documentElement.style.setProperty(colorLight, 'rgba(255, 255, 255, 1)');
      document.documentElement.style.setProperty(colorDark, 'rgba(45, 70, 78, 1)');
      document.documentElement.style.setProperty(secondColorDark, 'rgba(255, 255, 255, 1)');
    }
  }, [themeSwitch]);

  const handleIframeLoad = () => {
    setLoaded(true);
  };

  // Fetch gallery data from Firestore
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const q = collection(db, 'galleryImages');
        const querySnapshot = await getDocs(q);
        const images = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGalleryData(images);
      } catch (error) {
        console.error('Error fetching gallery data: ', error);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <AuthContext.Provider value={value}>
      <LoadedContext.Provider value={{ loaded, setLoaded, handleIframeLoad }}>
        <ThemeContext.Provider value={[themeSwitch, setThemeSwitch]}>
          <GalleryContext.Provider value={{ galleryData, setGalleryData }}>{props.children}</GalleryContext.Provider>
        </ThemeContext.Provider>
      </LoadedContext.Provider>
    </AuthContext.Provider>
  );
};
