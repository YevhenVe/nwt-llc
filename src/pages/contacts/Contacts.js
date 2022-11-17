import React from "react";
import { ReactComponent as LocationIcon } from "assets/icons/Location.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/Phone.svg";
import { ReactComponent as EmailIcon } from "assets/icons/Email.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/Instagram.svg";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts-wrapper" name="contacts">
      <div className="contacts-box">
        <div className="side-left">
          <div className="contacts-label">
            <div className="pre-label">contact</div>
            <div className="after-label">us</div>
          </div>
          <div className="contacts-content">
            <div className="address">
              <div className="contact-icon">
                <LocationIcon />
              </div>
              <div className="contact-text">
                <a
                  href="https://www.google.com/maps/place/2410+Satellite+Blvd+NE,+Buford,+GA+30518/@34.0872945,-84.0090425,15z/data=!4m13!1m7!3m6!1s0x88f5940c55025f4f:0xfd4bcf3735bb879c!2s2410+Satellite+Blvd+NE,+Buford,+GA+30518!3b1!8m2!3d34.0872945!4d-83.9987428!3m4!1s0x88f5940c55025f4f:0xfd4bcf3735bb879c!8m2!3d34.0872945!4d-83.9987428"
                  target="blank"
                >
                  2410 Satellite Blvd NE, Buford, GA 30518, Suite E
                </a>
              </div>
            </div>
            <div className="phone">
              <div className="contact-icon">
                <PhoneIcon />
              </div>
              <div className="contact-text">
                <a href="tel:+19999999999">+1(999)999-9999</a>
              </div>
            </div>
            <div className="email">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <div className="contact-text">
                <a href="mailto:support@nwt-llc.com">support@nwt-llc.com</a>
              </div>
            </div>
            <div className="work-time">
              Mon - Fri: 8:00 am - 5:00 <br /> pm Sat - Sun: weekend
            </div>
          </div>
          <div className="contacts-label follow-us">
            <div className="pre-label">follow</div>
            <div className="after-label">us</div>
          </div>
          <div className="social-icons">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="side-right">1</div>
      </div>
    </div>
  );
};

export default Contacts;
