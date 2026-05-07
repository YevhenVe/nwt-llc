import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LoadedContext } from 'contexts/Context';
import CustomButton from 'components/customButton/CustomButton';
import { ReactComponent as LoaderAnimation } from 'assets/icons/Loader.svg';
import { Link } from 'react-scroll';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/ArrowDown.svg';
import Modal from '@mui/material/Modal';
import './Home.scss';

const Home = () => {
  const { loaded, handleIframeLoad } = useContext(LoadedContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper-home" name="home">
      <video autoPlay muted loop>
        <source src="https://nwt-llc.com/static/media/herovideo.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className={`home-content-wrapper ${isVisible ? 'visible' : ''}`}>
        <div className="hero-badge">
          <span className="badge-dot" />
          {t('COMMUNICATIONS SOLUTIONS')}
        </div>
        <h1 className="hero-headline">
          Plan, <span className="highlight">Execute</span>, Deliver!
        </h1>
        <p className="hero-subtitle">
          {t('Building reliable networks and communication infrastructure for a connected future.')}
        </p>
        <div className="hero-actions">
          <CustomButton label={t('Career Opportunities')} onClick={() => navigate('/career')} />
          <Link className="ghost-btn" activeClass="active" to="about" smooth spy offset={-59} duration={300}>
            {t('Learn More')}
          </Link>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">{t('Years Experience')}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">3000+</span>
            <span className="stat-label">{t('Projects Done')}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">{t('Client Trust')}</span>
          </div>
        </div>
      </div>
      <Link className="link" activeClass="active" to="about" smooth spy offset={-59} duration={300}>
        <div className="arrow-down">
          <ArrowDownIcon />
        </div>
      </Link>
      <Modal open={open} onClose={handleClose}>
        <>
          <div className="modal-content">
            <div className="modal-close-button" onClick={handleClose}>
              🞪
            </div>
            <div className="employee-loader">{!loaded && <LoaderAnimation />}</div>
            <iframe
              src="https://forms.monday.com/forms/embed/841dbe78d20737008c792d3f09157e85?r=use1"
              width="650"
              height="500"
              title="Employee form"
              onLoad={handleIframeLoad}
            />
          </div>
          <div className="child" />
        </>
      </Modal>
    </div>
  );
};

export default Home;
