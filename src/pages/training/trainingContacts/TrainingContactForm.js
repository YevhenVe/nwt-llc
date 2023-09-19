import React from "react";
import { ThemeProvider } from "contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import ContactForm from "components/contactForm/contactForm";
import IllustrationImage from "assets/images/Illustration4.png";
import "./TrainingContactForm.scss";

const TrainingContactForm = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider>
      <div className="training-wrapper">
        <div className="training-main-title">
          <div className="training-main-title-content">
            <b>NWT Training Academy</b> provides techs with the training needed to become an employable Coax Splicing Technician ($200 - $300/day as a subcontractor or $20-$30/hour working for a
            nationally recognized company such as Comcast/Charter etc...).
            <br />
            <br /> <b>The 4-weeks course is comprised of:</b>
            <br />
            <br />
            <ul className="training-list">
              <li>1-Week in our Buford GA facility with a mix of theory and hands on training</li>
              <li>1-Week in Maryland at a facility setup to replicate real world scenarios and challenges</li>
              <li>2-Week shadowing an active field project working side-by-side with techs.</li>
            </ul>
            <br /> Alongside the tech training we can provide the logistical & administrative training needed to successfully break into <br />
            this field and manage projects (Field CM role).
            <br /> <br />
            <b>Feel free to fill out the form and somebody will be in touch to discuss options.</b>
            <div className="training-ps">
              <br /> Onward & Upward,
              <br /> NWT Academy
            </div>
          </div>
        </div>
        <div className="training-content-wrapper">
          <div className="trainig-content">
            <div className="training-title">
              <span>
                {t(`${"contact"}`)}&nbsp;
                {t(`${"us"}`)}
              </span>
            </div>
            <div className="trining-contact-wrapper">
              <div className="training-photos">
                <img src={IllustrationImage} alt="" />
              </div>
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default TrainingContactForm;
