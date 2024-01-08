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
        <div
            className="contacts-wrapper"
            name="contacts"
        >
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
                        <a
                            href="https://www.facebook.com/llc.nwt"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Facebook"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/nwt_llc"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Instagram"
                        >
                            <InstagramIcon />
                        </a>
                        <a
                            href="https://www.youtube.com/@officenwt"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Youtube"
                        >
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.0757534656881!2d-84.00102474478838!3d34.08737889799626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5959a5794f9df%3A0x75a68ad86afb1573!2sNew%20World%20Telecom%20LLC!5e0!3m2!1sen!2sus!4v1699551204403!5m2!1sen!2sus"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="2400 Satellite Blvd Suite E, Buford, GA 30518"
            ></iframe>
            <div className="office-image">
                <img
                    src="https://res.cloudinary.com/dgbuorqxd/image/upload/v1678901394/nwt_llc/office.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Contacts;
