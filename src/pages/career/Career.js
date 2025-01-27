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
import { MenuItem, Select, TextField, Checkbox, FormControlLabel, FormControl, InputLabel } from '@mui/material';
import { ReactComponent as RemoveIcon } from 'assets/icons/Remove.svg';
import { ReactComponent as EditIcon } from 'assets/icons/Edit.svg';
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import 'react-quill/dist/quill.snow.css';
import './Career.scss';

const Career = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState([]);
  const [formLink, setFormLink] = useState('https://forms.monday.com/forms/841dbe78d20737008c792d3f09157e85?r=use1');
  const [storedJobs, setStoredJobs] = useState([]);
  const [formLocations, setFormLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState({});
  const [editingJob, setEditingJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSalaryVisible, setIsSalaryVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLocations, setSelectedLocations] = useState([]); //State for selected locations
  const [selectedPositions, setSelectedPositions] = useState([]); //State for selected positions
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const urlLocation = useLocation();

  useEffect(() => {
    if (Locations && Locations.length > 0) {
      setFormLocations(Locations);
    }
  }, []);

  // Add this useEffect to reset the page number when the filters change
  useEffect(() => {
    setCurrentPage(1);
    navigate(`/career?page=1`);
  }, [selectedLocations, selectedPositions]);

  // Filter jobs based on selected locations and positions
  const filteredJobs = storedJobs.filter((job) => {
    const jobLocations = Array.isArray(job.location) ? job.location : [job.location];
    const jobPositions = Array.isArray(job.position) ? job.position : [job.position];
    const locationMatch = selectedLocations.length === 0 || jobLocations.some((loc) => selectedLocations.includes(loc));
    const positionMatch = selectedPositions.length === 0 || jobPositions.some((pos) => selectedPositions.includes(pos));
    return locationMatch && positionMatch;
  });

  // Adding unique locations and positions to the filter dropdown
  const uniqueLocations = [
    ...new Set(
      storedJobs
        .flatMap((job) => (Array.isArray(job.location) ? job.location : [job.location]))
        .filter((loc) => loc && loc.trim() !== ''), // Фильтрация пустых значений
    ),
  ].sort();
  const uniquePositions = [
    ...new Set(storedJobs.map((job) => (typeof job.position === 'string' ? job.position : job.position.join(', ')))),
  ].sort();

  //Parsing query params
  const searchParams = new URLSearchParams(urlLocation.search);
  const page = parseInt(searchParams.get('page')) || 1;

  //Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

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
    try {
      // Проверка и преобразование location в массив
      const locationsArray = Array.isArray(location)
        ? location.filter((l) => l.trim() !== '')
        : [location].filter((l) => l.trim() !== '');

      // Создание объекта данных вакансии
      const jobData = {
        position: position.trim(),
        description: description.trim(),
        salary: isSalaryVisible ? salary.trim() : '',
        location: locationsArray,
        formLink: formLink.trim(),
      };

      // Валидация полей
      if (
        typeof jobData.position !== 'string' ||
        !jobData.position.trim() ||
        !jobData.description ||
        (isSalaryVisible && !jobData.salary) ||
        locationsArray.length === 0 ||
        !jobData.formLink
      ) {
        alert('Please fill in all required fields');
        return;
      }

      // Обновление или создание документа
      if (isEditing && editingJob) {
        await updateDoc(doc(db, 'jobs', editingJob.id), jobData);
      } else {
        await addDoc(collection(db, 'jobs'), jobData);
      }

      // Полный сброс состояния формы
      setPosition('');
      setDescription('');
      setSalary('');
      setLocation([]);
      setFormLink('https://forms.monday.com/forms/841dbe78d20737008c792d3f09157e85?r=use1');
      setIsSalaryVisible(false);
      setIsEditing(false);
      setEditingJob(null);
    } catch (error) {
      console.error('Error submitting job:', error);
      alert('An error occurred while saving the job');
    }
  };

  // Fetching the jobs from the database
  useEffect(() => {
    const jobsRef = collection(db, 'jobs');
    const unsubscribe = onSnapshot(jobsRef, (querySnapshot) => {
      const jobsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          location: Array.isArray(data.location) ? data.location : [data.location],
          position: Array.isArray(data.position) ? data.position : [data.position],
        };
      });
      setStoredJobs(jobsData);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Deleting jobs from the database
  const deleteJob = async (id) => {
    await deleteDoc(doc(db, 'jobs', id));
    setStoredJobs(storedJobs.filter((job) => job.id !== id));
  };

  // Handling the edit button
  const startEditingJob = (job) => {
    setEditingJob(job);
    setPosition(Array.isArray(job.position) ? job.position.join(', ') : job.position);
    setSalary(job.salary);
    setDescription(job.description);
    setLocation(Array.isArray(job.location) ? job.location : [job.location]);
    setFormLink(job.formLink);
    setIsEditing(true);
    setIsSalaryVisible(!!job.salary);
  };

  // Handling the change in the location
  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(typeof value === 'string' ? value.split(',') : value);
  };

  // Handling the read more button
  const handleReadMore = (id) => {
    setReadMore((prevReadMore) => ({ ...prevReadMore, [id]: !prevReadMore[id] }));
  };

  const disabled = !position || !description || (isSalaryVisible && !salary) || !location || !formLink;

  return (
    <>
      <Header />
      <div className="career-label">
        <div className="pre-label">{t('career')}</div>
        <div className="after-label">{t('opportunities')}</div>
      </div>
      <div className={`career-page-wrapper ${storedJobs.length === 0 ? 'vh100' : ''}`}>
        {filteredJobs.length === 0 && !currentUser ? (
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
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel>Location</InputLabel>
              <Select
                multiple
                size="small"
                value={location}
                onChange={handleLocationChange}
                renderValue={(selected) => selected.join(', ')}
                label="Location"
                sx={{
                  color: 'var(--color-dark)',
                  '& .MuiSelect-select': {
                    whiteSpace: 'normal',
                  },
                }}
              >
                {formLocations.map((loc) => (
                  <MenuItem key={loc.value} value={loc.value}>
                    <Checkbox checked={location.includes(loc.value)} />
                    {loc.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
        {/* Filters container */}
        <div className="filters-container">
          <FormControl fullWidth sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Filter by Location</InputLabel>
            <Select
              multiple
              value={selectedLocations}
              onChange={(e) => setSelectedLocations(e.target.value)}
              renderValue={(selected) => selected.join(', ')}
              label="Filter by Location"
            >
              {uniqueLocations.map((location) => (
                <MenuItem key={location} value={location}>
                  <Checkbox checked={selectedLocations.indexOf(location) > -1} />
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Filter by Position</InputLabel>
            <Select
              multiple
              value={selectedPositions}
              onChange={(e) => setSelectedPositions(e.target.value)}
              renderValue={(selected) => selected.join(', ')}
              label="Filter by Position"
            >
              {uniquePositions.map((position) => (
                <MenuItem key={position} value={position}>
                  <Checkbox checked={selectedPositions.includes(position)} />
                  {position}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {currentItems.map((job) => (
          <div className="job-card-wrapper" key={job.id}>
            <div className="job-card">
              <div className="job-card-position" variant="h5">
                <p>Job Title:</p>
                {typeof job.position === 'string' ? job.position : job.position.join(', ')}
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
                  <p>Salary:</p>
                  {job.salary}
                </div>
              )}
              <div className="job-card-location">
                <p>Location:</p>
                {Array.isArray(job.location) ? job.location.join(', ') : job.location}
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
