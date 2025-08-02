import { useTranslation } from 'react-i18next';
import TrainingAcademyLogo from 'assets/images/NWT_Training_Academy_Logo.png';
import CustomButton from 'components/customButton/CustomButton';
import MattsArmPdf from 'assets/documents/MattsArmOverview.pdf';
import MattsProd from 'assets/images/matsproduct.png';
import './TrainingContactForm.scss';

const TrainingContactForm = () => {
  const { t } = useTranslation();
  const URL = 'https://academy.nwt-llc.com/courses/offers/157e9f25-aab4-4766-8e84-5d706b058ce1';

  return (
    <div className="training-wrapper">
      <div className="training-main-title-mattsarm">
        <div className="training-main-title-content">
          <div className="training-label">
            <div className="pre-label">{t('Matt`s arm')}</div>
            <div className="after-label">{t('Training')}</div>
          </div>
        </div>
      </div>
      <div className="training-content-wrapper">
        <div className="trainig-content">
          <div className="training-title">
            <img src={TrainingAcademyLogo} alt="Illustration" className="traiing_academy_logo" />
            <div className="training-title-body">
              <br /> is thrilled to partner with Matt's Arm as the exclusive provider of certified training for their
              revolutionary advanced lifting solution! 💪
              <br />
              <br />
              Together, we’ve collaborated closely with the developers to transform the curriculum into a digital LMS
              platform 🖥️🚀, designed with tower techs’ familiarity in mind. Paired with our hands-on, in-person
              practical training, technicians will master cutting-edge skills and earn a globally recognized
              certification 🏅✅.
              <br />
              <br />
              This credential is widely accepted by major Turf Vendors & Tower Companies, empowering technicians to
              excel in the industry! 🎯
            </div>
            <br />
            <br />
            <CustomButton label="Our courses " onClick={() => window.open(URL, '_blank')} />
            <br />
            <a className="product-overview-link" href={MattsArmPdf} target="_blank" rel="noopener noreferrer">
              <img className="product-overview-image" src={MattsProd} alt="Matt`s Arm Product Overview" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingContactForm;
