import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CookieBanner from 'react-cookie-banner';
import ScrollOnTop from 'components/scrollontop/ScrollOnTop';
import { ContextProvider } from 'contexts/Context';
import CustomCookieModal from './components/customCookieModal/CustomCookieModal';
import AppRoutes from './Routes';
import './styles/Index.scss';

function App() {
  const [cookieModalIsOpen, setCookieModalIsOpen] = useState(false);
  return (
    <Router>
      <ContextProvider>
        <ScrollOnTop />
        <AppRoutes />
        <CustomCookieModal isOpen={cookieModalIsOpen} onClose={() => setCookieModalIsOpen(false)} />
        <CookieBanner
          onAccept={() => {
            setCookieModalIsOpen(true);
          }}
          cookie="user-has-accepted-cookies"
        />
      </ContextProvider>
    </Router>
  );
}

export default App;
