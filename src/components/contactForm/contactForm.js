import React from "react";
import FieldCustom from "./FieldCustom/FieldCustom";
import CustomButton from "components/customButton/CustomButton";
import { ReactComponent as PhoneIcon } from "assets/icons/Phone.svg";
import { ReactComponent as EmailIcon } from "assets/icons/Email.svg";
import { ReactComponent as NameIcon } from "assets/icons/Name.svg";
import { ReactComponent as AttachIcon } from "assets/icons/Attach.svg";
import "./contactForm.scss";

const ContactForm = () => {
  return (
    <div className="backplate">
      <div className="mailform-wrapper">
        <form
          id="form"
          className="formWrap"
          action="https://nwt-llc.com/H340v93kd8sk2lueM4f8v62olssp.php"
          method="POST"
          encType="multipart/form-data"
        >
          <FieldCustom name="user_name" type="text" placeholder="Enter full name" icon=<NameIcon /> />
          <FieldCustom name="user_phone" type="number" placeholder="Enter phone number" icon=<PhoneIcon /> />
          <FieldCustom name="user_email" type="email" placeholder="Enter email" icon=<EmailIcon /> />
          <FieldCustom name="attachment[]" type="file" title="Please choose document in PDF" icon=<AttachIcon /> />
          {/* <div className="file-input-placeholder">Select files in PDF format</div> */}
          <input type="hidden" name="_next" />
          <input type="text" name="_gotcha" className="spam" />
          <CustomButton className="submit-button" label="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
