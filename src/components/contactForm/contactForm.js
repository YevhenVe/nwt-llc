import React, { useState } from "react";
import FieldCustom from "./FieldCustom/FieldCustom";
import CustomButton from "components/customButton/CustomButton";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactComponent as PhoneIcon } from "assets/icons/Phone.svg";
import { ReactComponent as EmailIcon } from "assets/icons/Email.svg";
import { ReactComponent as NameIcon } from "assets/icons/Name.svg";
import { ReactComponent as AttachIcon } from "assets/icons/Attach.svg";
import { ReactComponent as CompanyIcon } from "assets/icons/Company.svg";
import { ReactComponent as HashIcon } from "assets/icons/Hash.svg";
import { ReactComponent as GeoIcon } from "assets/icons/Geo.svg";
import "./contactForm.scss";

const ContactForm = ({ className }) => {
    const { t } = useTranslation();
    const [location, setLocation] = useState(useLocation());

    return (
        <div className="backplate">
            {location.pathname !== "/training" ? (
                <div className="mailform-wrapper">
                    <form
                        id="form"
                        className="formWrap"
                        action="https://nwt-llc.com/H340v93kd8sk2lueM4f8v62olssp.php"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <FieldCustom
                            name="user_name"
                            type="text"
                            placeholder="Enter full name"
                            icon=<NameIcon />
                            required
                        />
                        <FieldCustom
                            name="user_phone"
                            type="number"
                            placeholder="Enter phone number"
                            icon=<PhoneIcon />
                            required
                        />
                        <FieldCustom
                            name="user_email"
                            type="email"
                            placeholder="Enter email"
                            icon=<EmailIcon />
                            required
                        />
                        <textarea
                            name="user_text"
                            className={`text-area ${className}`}
                            cols="30"
                            rows="10"
                            placeholder={t(`${"Enter message"}`)}
                            required
                        />
                        <FieldCustom
                            name="attachment[]"
                            type="file"
                            title="Please choose document in PDF"
                            icon=<AttachIcon />
                        />
                        <input
                            type="hidden"
                            name="_next"
                        />
                        <input
                            type="text"
                            name="_gotcha"
                            className="spam"
                        />
                        <CustomButton
                            className="submit-button"
                            label="submit"
                        />
                    </form>
                </div>
            ) : (
                <div className="mailform-wrapper training-custom">
                    <form
                        id="form"
                        className="formWrap"
                        action="https://nwt-llc.com/H340v93kd8sk2lueM4f8v62olsspT.php"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <FieldCustom
                            name="first_name"
                            type="text"
                            placeholder={t(`${"First name"}`)}
                            icon=<NameIcon />
                            required
                        />
                        <FieldCustom
                            name="last_name"
                            type="text"
                            placeholder={t(`${"Last name"}`)}
                            icon=<NameIcon />
                            required
                        />
                        <FieldCustom
                            name="user_email"
                            type="email"
                            placeholder="Email"
                            icon=<EmailIcon />
                            required
                        />
                        <FieldCustom
                            name="user_phone"
                            type="number"
                            placeholder={t(`${"Phone number"}`)}
                            icon=<PhoneIcon />
                            required
                        />
                        <FieldCustom
                            name="company_name"
                            type="text"
                            placeholder={t(`${"Construction experience"}`)}
                            icon=<CompanyIcon />
                            required
                        />
                        <FieldCustom
                            name="number_of_students"
                            type="number"
                            placeholder={t(`${"Willing travel"}`)}
                            icon=<HashIcon />
                            required
                        />
                        <FieldCustom
                            name="geo_location"
                            type="text"
                            placeholder={t(`${"Financing Selfpay"}`)}
                            icon=<GeoIcon />
                            required
                        />
                        <textarea
                            name="user_text"
                            className={`text-area ${className}`}
                            cols="30"
                            rows="10"
                            placeholder={t(`${"Enter message training"}`)}
                        />
                        <input
                            type="hidden"
                            name="_next"
                        />
                        <input
                            type="text"
                            name="_gotcha"
                            className="spam"
                        />
                        <div className="after-text">We will contact you within 2 business days</div>
                        <CustomButton
                            className="submit-button"
                            label="submit"
                        />
                    </form>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
