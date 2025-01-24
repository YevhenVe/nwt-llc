import React, { useState, useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
import CustomButton from 'components/customButton/CustomButton';
import Locations from './Locations.json';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../../Firebase';
import { AuthContext } from 'contexts/Context';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { ReactComponent as RemoveIcon } from 'assets/icons/Remove.svg';
import { ReactComponent as EditIcon } from 'assets/icons/Edit.svg';
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import 'react-quill/dist/quill.snow.css';
import './Career.scss';
import min from './../../../node_modules/lodash-es/min';

const Career = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [formLink, setFormLink] = useState('https://forms.monday.com/forms/841dbe78d20737008c792d3f09157e85?r=use1');
  const [storedJobs, setStoredJobs] = useState([]);
  const [readMore, setReadMore] = useState({});
  const [editingJob, setEditingJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSalaryVisible, setIsSalaryVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const urlLocation = useLocation();

  //parsing query params
  const searchParams = new URLSearchParams(urlLocation.search);
  const page = parseInt(searchParams.get('page')) || 1;

  //pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = storedJobs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(storedJobs.length / itemsPerPage);

  const handleNextPage = () => {
    const nextPageNumber = currentPage + 1;
    if (nextPageNumber <= totalPages) {
      goToPage(nextPageNumber);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      goToPage(prevPage);
    }
  };

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const goToPage = (page) => {
    navigate(`/career?page=${page}`);
  };

  // Adding new jobs to the database
  const onSubmit = async () => {
    if (isEditing) {
      // Updating an existing job
      await updateDoc(doc(db, 'jobs', editingJob.id), {
        position,
        description,
        salary: isSalaryVisible ? salary : '',
        location,
        formLink,
      });
      setIsEditing(false);
      setEditingJob(null);
    } else {
      // Creating a new job
      const docRef = await addDoc(collection(db, 'jobs'), {
        position,
        description,
        salary: isSalaryVisible ? salary : '',
        location,
        formLink,
      });
      console.log('Document written with ID: ', docRef.id);
    }
    setPosition('');
    setDescription('');
    setSalary('');
    setLocation('');
    setIsSalaryVisible(false);
  };

  // Fetching the jobs from the database
  useEffect(() => {
    const jobsRef = collection(db, 'jobs');
    const unsubscribe = onSnapshot(jobsRef, (querySnapshot) => {
      const jobsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setStoredJobs(jobsData);
    });
    return unsubscribe; // Clean up the listener when the component unmounts
  }, []);

  // Deleting jobs from the database
  const deleteJob = async (id) => {
    await deleteDoc(doc(db, 'jobs', id));
    setStoredJobs(storedJobs.filter((job) => job.id !== id));
  };

  // Handling the edit button
  const startEditingJob = (job) => {
    setEditingJob(job);
    setPosition(job.position);
    setSalary(job.salary);
    setDescription(job.description);
    setLocation(job.location);
    setFormLink(job.formLink);
    setIsEditing(true);
    setIsSalaryVisible(!!job.salary);
  };

  // Handling the change in the location
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  // Handling the read more button
  const handleReadMore = (id) => {
    setReadMore((prevReadMore) => ({ ...prevReadMore, [id]: !prevReadMore[id] }));
  };

  const disabled = !position || !description || (isSalaryVisible && !salary) || !location || !formLink;

  return (
    <>
      <Header />
      <div className={`career-page-wrapper ${storedJobs.length === 0 ? 'vh100' : ''}`}>
        <div className="career-label">
          <div className="pre-label">{t('career')}</div>
          <div className="after-label">{t('opportunities')}</div>
        </div>
        {storedJobs.length === 0 && !currentUser ? (
          <div className="no-opportunities">{t('No opportunities today')}</div>
        ) : (
          <></>
        )}
        {currentUser && (
          <div className="new-career-opportunity-form">
            <TextField
              type="text"
              size="small"
              fullWidth
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Position Name"
              sx={{ marginBottom: 2, input: { color: 'var(--color-dark)' } }}
            />
            <ReactQuill
              value={description}
              onChange={setDescription}
              className="custom-quill"
              placeholder="Job description"
              modules={{
                toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['link']],
              }}
              style={{
                width: '100%',
                marginBottom: '16px',
                backgroundColor: 'var(--color-light)',
                color: 'var(--color-dark)',
              }}
            />
            <div className="salary-checkbox">
              <FormControlLabel
                control={<Checkbox checked={isSalaryVisible} onChange={(e) => setIsSalaryVisible(e.target.checked)} />}
                label="Include Salary"
              />
            </div>
            {isSalaryVisible && (
              <TextField
                type="text"
                size="small"
                fullWidth
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Salary"
                sx={{ marginBottom: 2, input: { color: 'var(--color-dark)' } }}
              />
            )}
            <Select
              size="small"
              fullWidth
              value={location}
              onChange={handleChange}
              sx={{ marginBottom: 2, color: 'var(--color-dark)' }}
            >
              {Locations.map((location) => (
                <MenuItem key={location.value} value={location.value}>
                  {location.label}
                </MenuItem>
              ))}
            </Select>
            <TextField
              type="text"
              size="small"
              fullWidth
              value={formLink}
              onChange={(e) => setFormLink(e.target.value)}
              placeholder="Form Link"
              sx={{ marginBottom: 2, input: { color: 'var(--color-dark)' } }}
            />
            <CustomButton
              label={isEditing ? 'Update Job' : 'Add new job'}
              onClick={onSubmit}
              disabled={disabled}
              title={disabled ? 'Please fill in all fields' : ''}
              className="add-new-job-button"
            />
          </div>
        )}
        {currentItems.map((job) => (
          <div className="job-card-wrapper" key={job.id}>
            <div className="job-card">
              <div className="job-card-position" variant="h5">
                <p>Position:</p>
                {job.position}
              </div>
              <div className={`description ${readMore[job.id] ? 'description-more' : ''}`}>
                <div className="description-label">Description:</div>
                <div
                  className={`description-job ${readMore[job.id] ? 'description-job-more' : ''}`}
                  dangerouslySetInnerHTML={
                    typeof job.description === 'string' ? { __html: job.description } : { __html: '' }
                  }
                />
              </div>
              <div className="read-more-button">
                <div onClick={() => handleReadMore(job.id)}>{readMore[job.id] ? 'Read less ⤴' : 'Read more ⤵'}</div>
              </div>
              {job.salary && (
                <div className="job-card-salary">
                  <p>Salary:</p>${job.salary}
                </div>
              )}
              <div className="job-card-location">
                <p>Location:</p>
                {job.location}
              </div>
            </div>
            <div className="button-box">
              {currentUser && (
                <div className="manage-buttons">
                  <div onClick={() => deleteJob(job.id)} className="delete-job-button">
                    <RemoveIcon />
                  </div>
                  <div onClick={() => startEditingJob(job)} className="edit-job-button">
                    <EditIcon />
                  </div>
                </div>
              )}
              <div>
                <a href={job.formLink} target="_blank" rel="noopener noreferrer" className="fill-out-form-button">
                  <CustomButton label="Fill out form"></CustomButton>
                </a>
              </div>
            </div>
          </div>
        ))}
        {currentItems.length > 0 && (
          <div className="pagination-buttonbox">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              ＜ Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i + 1} onClick={() => goToPage(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                {i + 1}
              </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next ＞
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Career;
