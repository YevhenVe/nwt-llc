import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as LocationIcon } from "assets/icons/Location.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/Phone.svg";
import { ReactComponent as EmailIcon } from "assets/icons/Email.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/Instagram.svg";
import { ReactComponent as YoutubeIcon } from "assets/icons/Youtube.svg";
import ContactForm from "components/contactForm/contactForm";
import "./Contacts.scss";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts-wrapper" name="contacts">
      <div className="contacts-box">
        <div className="side-left">
          <div className="contacts-label">
            <div className="pre-label">{t("contact")}</div>
            <div className="after-label">{t("us")}</div>
          </div>
          <div className="contacts-content">
            <div className="address">
              <div className="contact-icon">
                <LocationIcon />
              </div>
              <div className="contact-text">
                <a
                  href="https://www.google.com/maps/place/34%C2%B005'15.3%22N+84%C2%B000'03.3%22W/@34.0875831,-84.0015607,232m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d34.087582!4d-84.000917?entry=ttu"
                  target="blank"
                >
                  2400 Satellite Blvd NE, Buford, GA 30518, <b>Suite E</b>
                </a>
              </div>
            </div>
            <div className="phone">
              <div className="contact-icon">
                <PhoneIcon />
              </div>
              <div className="contact-text">
                <a href="tel:+14044907923">+1(404)490-7923</a>
              </div>
            </div>
            <div className="email">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <div className="contact-text">
                <a href="mailto:office@nwt-llc.com">office@nwt-llc.com</a>
              </div>
            </div>
            <div className="work-time">
              {t("work time1")} <br /> {t("work time2")}
            </div>
          </div>
          <div className="contacts-label follow-us">
            <div className="pre-label">{t("follow")}</div>
            <div className="after-label">{t("us")}</div>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/llc.nwt" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/nwt_llc" target="_blank" rel="noopener noreferrer" title="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@officenwt" target="_blank" rel="noopener noreferrer" title="Youtube">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <div className="side-right">
          <ContactForm className="text-aria-contacts" />
        </div>
      </div>
      <iframe
        className="map"
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2400%20Satellite%20Blvd%20Suite%20E,%20Buford,%20GA%2030518+(New%20World%20Telecom%20LLC)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>

      <div className="office-image">
        <img src="https://res.cloudinary.com/dgbuorqxd/image/upload/v1678901394/nwt_llc/office.jpg" alt="" />
      </div>
    </div>
  );
};

export default Contacts;
