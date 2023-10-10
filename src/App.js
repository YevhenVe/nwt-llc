import React, { useState } from "react";
import CookieBanner from "react-cookie-banner";
import { Routes, Route } from "react-router-dom";
import Main from "pages/main/Main";
import NotFoundPage from "pages/notFoundPage/NotFoundPage";
import EmailSent from "pages/emailSent/EmailSent";
import Training from "pages/training/TrainingMain";
import CustomCookieModal from "./components/customCookieModal/CustomCookieModal";
import "./styles/Index.scss";

function App() {
    const [cookieModalIsOpen, setCookieModalIsOpen] = useState(false);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={<Main />}
                />
                <Route
                    path="/email-sent"
                    exact
                    element={<EmailSent />}
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
                <Route
                    path="/training"
                    element={<Training />}
                />
            </Routes>
            <CustomCookieModal
                isOpen={cookieModalIsOpen}
                onClose={() => setCookieModalIsOpen(false)}
            />
            <CookieBanner
                onAccept={() => {
                    setCookieModalIsOpen(true); // Открываем модальное окно при согласии
                }}
                cookie="user-has-accepted-cookies"
            />
        </>
    );
}

export default App;
