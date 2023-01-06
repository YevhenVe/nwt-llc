import CookieBanner from "react-cookie-banner";
import { Routes, Route } from "react-router-dom";
import Main from "pages/main/Main";
import NotFoundPage from "pages/notFoundPage/NotFoundPage";
import EmailSent from "pages/emailSent/EmailSent";
import "./styles/Index.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/email-sent" exact element={<EmailSent />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CookieBanner
        className="custom-react-cookie-banner"
        message="NWT-LLC.COM using cookies!"
        buttonMessage="Agree"
        onAccept={() => {
          alert("Thanks for understanding");
        }}
        cookie="user-has-accepted-cookies"
      />
    </>
  );
}

export default App;
