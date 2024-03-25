import React from "react";
import { ThemeProvider } from "contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import IllustrationImage from "../../../assets/images/Illustration4_.png";
import "./TrainingContactForm.scss";

const TrainingContactForm = () => {
    const { t } = useTranslation();
    return (
        <ThemeProvider>
            <div className="training-wrapper">
                <div className="training-main-title">
                    <div className="training-main-title-content">
                        <div className="training-label">
                            <b>NWT Training Academy</b> provides techs with the training needed to become an employable Coax Splicing Technician.
                        </div>
                        <br /> <b>The 1-week course at our Buford GA facility is comprised of:</b>
                        <br />
                        <div className="training-price-box">Price: $999</div>
                        <ul className="training-list">
                            <li>Day 1: Overview and Theory / Equipment / Tools</li>
                            <li>Day 2: Genesis Specific Training</li>
                            <li>Day 3: High-Split Specific Training</li>
                            <li>Day 4: Hands on plus Bucket Safety Training (Jenksinsburg GA)</li>
                            <li>Day 5: Hot Splice / Balancing and troubleshooting (Competency Exam)</li>
                        </ul>
                        <br />
                        <br />
                        <b>Feel free to fill out the form and somebody will be in touch to discuss options.</b>
                        <div className="training-ps">
                            <br />
                            <br /> Onward & Upward,
                            <br /> NWT Academy
                        </div>
                    </div>
                </div>
                <div className="training-content-wrapper">
                    <div className="trainig-content">
                        <div className="training-title">
                            <h1>
                                {t(`${"contact"}`)}&nbsp;
                                {t(`${"us"}`)}
                            </h1>
                            <br />
                            <h2>Training Academy Information Form</h2>
                            <p>
                                If you are interested in gaining new knowledge with us, fill out this form to join the academy base. Share your experience and contact details.
                                <br /> "Please note that all the information provided by you will be used solely within New World Telecom LLC and is intended for internal use only. We strictly
                                maintain confidentiality and do not disclose your data to any third parties for marketing purposes"
                            </p>
                        </div>
                        <div className="trining-contact-wrapper">
                            <div className="training-photos">
                                <img
                                    src={IllustrationImage}
                                    alt=""
                                />
                            </div>
                            <div className="contact-form">
                                {/* <ContactForm /> */}
                                {/* <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSfq_FPIUDDFJmSf0fAeaxwziD4x9BqFxy55AZMhgajXQjVG2g/viewform?embedded=true"
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                >
                                    Loading…
                                </iframe> */}
                                <iframe
                                    className="my-iframe"
                                    src="https://forms.monday.com/forms/embed/fe366942024b89c1196e92fce9e4808f?r=use1"
                                    frameBorder="0"
                                    border="0"
                                    cellSpacing="0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default TrainingContactForm;
