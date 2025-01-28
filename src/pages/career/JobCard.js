import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as RemoveIcon } from 'assets/icons/Remove.svg';
import { ReactComponent as EditIcon } from 'assets/icons/Edit.svg';
import CustomButton from 'components/customButton/CustomButton';
import './Career.scss'; // Или создаем отдельный файл стилей для JobCard

const JobCard = ({ job, currentUser, readMore, onReadMore, onDelete, onEdit }) => {
  const { t } = useTranslation();

  return (
    <div className="job-card-wrapper">
      <div className="job-card">
        <div className="job-card-position">
          <p>{t('Job title')}:</p>
          {Array.isArray(job.position) ? job.position.join(', ') : job.position}
        </div>
        <div className={`description ${readMore[job.id] ? 'description-more' : ''}`}>
          <div className="description-label">{t('Description')}:</div>
          <div
            className={`description-job ${readMore[job.id] ? 'description-job-more' : ''}`}
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>
        <div className="read-more-button" onClick={onReadMore}>
          {readMore[job.id] ? t('Read less') : t('Read more')}
        </div>
        {job.salary && (
          <div className="job-card-salary">
            <p>{t('Salary')}:</p>
            {job.salary}
          </div>
        )}
        <div className="job-card-location">
          <p>{t('Location')}:</p>
          {Array.isArray(job.location) ? job.location.join(', ') : job.location}
        </div>
      </div>
      <div className="button-box">
        {currentUser && (
          <div className="manage-buttons">
            <button onClick={onDelete} className="delete-job-button">
              <RemoveIcon />
            </button>
            <button onClick={onEdit} className="edit-job-button">
              <EditIcon />
            </button>
          </div>
        )}
        <a href={job.formLink} target="_blank" rel="noopener noreferrer">
          <CustomButton label={t('fill out form')} />
        </a>
      </div>
    </div>
  );
};

export default JobCard;
