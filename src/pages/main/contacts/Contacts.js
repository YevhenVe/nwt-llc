import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LocationIcon } from 'assets/icons/Location.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/Phone.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/Email.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/Facebook.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/Instagram.svg';
import { ReactComponent as YoutubeIcon } from 'assets/icons/Youtube.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/Linkedin.svg';
import OfficeImage from 'assets/images/office.jpg';
import ContactForm from 'components/contactForm/contactForm';
import './Contacts.scss';
import ContactDetails from './ContactDetails';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts-wrapper" name="contacts">
      <div className="contacts-box">
        <div className="side-left">
          <div className="contacts-label">
            <div className="pre-label">{t('contact')}</div>
            <div className="after-label">{t('us')}</div>
          </div>
          <ContactDetails t={t} />
          <div className="contacts-label follow-us">
            <div className="pre-label">{t('follow')}</div>
            <div className="after-label">{t('us')}</div>
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
            <a
              href="https://www.linkedin.com/company/nwt-llc/"
              target="_blank"
              rel="noopener noreferrer"
              title="Youtube"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className="side-right">
          <ContactForm className="text-aria-contacts" />
        </div>
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.0757534656881!2d-84.00102474478838!3d34.08737889799626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5959a5794f9df%3A0x75a68ad86afb1573!2sNew%20World%20Telecom%20LLC!5e0!3m2!1sen!2sus!4v1699551204403!5m2!1sen!2sus"
        width="100%"
        height="600"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="2400 Satellite Blvd Suite E, Buford, GA 30518"
      ></iframe>
      <div className="office-image">
        <img src={OfficeImage} alt="front door of the office" />
      </div>
    </div>
  );
};

export default Contacts;
