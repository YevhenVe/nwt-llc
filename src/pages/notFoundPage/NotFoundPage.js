import React from "react";
import { ThemeProvider } from "contexts/ThemeContext";
import { Link } from "react-router-dom";
import Footer from "components/footer/footer";
import CustomButton from "components/customButton/CustomButton";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="page-not-found-wrapper">
      <ThemeProvider>
        <div className="page-not-found-text">
          <h1>Error Page Not Found</h1>
          <p>We're sorry, but the requested page is all tied up at the moment, and cannot be found.</p>
          <Link to={"/"}>
            <CustomButton label="Return to Home Page" />
          </Link>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default NotFoundPage;
