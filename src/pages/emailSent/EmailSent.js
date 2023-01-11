import React from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "contexts/ThemeContext";
import "./EmailSent";
import Footer from "components/footer/footer";

const EmailSent = () => {
  const { t } = useTranslation();
  setTimeout(() => window.location.replace("/"), 3000);
  return (
    <div className="page-not-found-wrapper">
      <ThemeProvider>
        <div className="page-not-found-text">
          <h1>{t("E-mail sent")}</h1>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default EmailSent;
