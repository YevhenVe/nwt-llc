import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './TrainingMain.scss';

const TrainingMain = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="training-box-wrapper">
        <div className="training-box-tower" onClick={() => navigate('/tower-training')}>
          <p>{t('Tower Training')}</p>
        </div>
        <div className="training-box-matts" onClick={() => navigate('/matts-training')}>
          <p>{t('Matt`s Arm Training')}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingMain;
