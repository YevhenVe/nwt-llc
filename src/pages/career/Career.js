import React, { useState, useEffect, useContext, useMemo } from 'react';
import ReactQuill from 'react-quill';
import Header from 'components/header/Header';
import Footer from 'components/footer/footer';
import CustomButton from 'components/customButton/CustomButton';
import Locations from './Locations.json';
import Pagination from './Pagination';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../../Firebase';
import { AuthContext } from 'contexts/Context';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, TextField, Checkbox, FormControlLabel, FormControl, InputLabel } from '@mui/material';
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import JobCard from './JobCard';
import 'react-quill/dist/quill.snow.css';
import './Career.scss';

const Career = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const urlLocation = useLocation();

  // States
  const [formData, setFormData] = useState({
    position: '',
    salary: '',
    description: '',
    location: [],
    formLink: 'https://forms.monday.com/forms/841dbe78d20737008c792d3f09157e85?r=use1',
  });
  const [storedJobs, setStoredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState({});
  const [editingJob, setEditingJob] = useState(null);
  const [isSalaryVisible, setIsSalaryVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ locations: [], positions: [] });

  // Constants
  const itemsPerPage = 5;
  const searchParams = new URLSearchParams(urlLocation.search);
  const page = parseInt(searchParams.get('page')) || 1;

  // Memoized filtered jobs based on selected filters
  const filteredJobs = useMemo(
    () =>
      storedJobs.filter((job) => {
        const jobLocations = Array.isArray(job.location) ? job.location : [job.location];
        const jobPositions = Array.isArray(job.position) ? job.position : [job.position];
        // Check if job matches any of the selected filters
        return (
          (!filters.locations.length || jobLocations.some((l) => filters.locations.includes(l))) &&
          (!filters.positions.length || jobPositions.some((p) => filters.positions.includes(p)))
        );
      }),
    [storedJobs, filters],
  );

  // Memoized pagination details for the current page of filtered jobs
  const pagination = useMemo(
    () => ({
      currentItems: filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
      totalPages: Math.ceil(filteredJobs.length / itemsPerPage),
    }),
    [filteredJobs, currentPage],
  );

  // Memoized unique values for job locations and positions
  const uniqueValues = useMemo(
    () => ({
      locations: [...new Set(storedJobs.flatMap((job) => job.location))].sort(),
      positions: [...new Set(storedJobs.flatMap((job) => job.position))].sort(),
    }),
    [storedJobs],
  );

  // Handlers
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  // Handle filter change
  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setCurrentPage(1);
    navigate('/career?page=1');
  };
  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/career?page=${newPage}`);
  };

  // Save job data to firestore
  const onSubmit = async () => {
    try {
      const jobData = {
        position: formData.position.trim(),
        description: formData.description.trim(),
        salary: isSalaryVisible ? formData.salary.trim() : '',
        location: formData.location.filter((l) => l.trim()),
        formLink: formData.formLink.trim(),
      };

      if (!jobData.position || !jobData.description || !formData.location.length || !jobData.formLink) {
        alert(t('fill_all_fields'));
        return;
      }

      if (editingJob) {
        await updateDoc(doc(db, 'jobs', editingJob.id), jobData);
      } else {
        await addDoc(collection(db, 'jobs'), jobData);
      }

      setFormData({
        position: '',
        salary: '',
        description: '',
        location: [],
        formLink: 'https://forms.monday.com/forms/841dbe78d20737008c792d3f09157e85?r=use1',
      });
      setIsSalaryVisible(false);
      setEditingJob(null);
    } catch (error) {
      console.error('Error:', error);
      alert(t('save_error'));
    }
  };

  // Fetch jobs from firestore and save them to state
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'jobs'), (snapshot) => {
      const jobsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        location: Array.isArray(doc.data().location) ? doc.data().location : [doc.data().location],
        position: Array.isArray(doc.data().position) ? doc.data().position : [doc.data().position],
      }));
      setStoredJobs(jobsData);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Update current page when user navigates
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  // Helper to render a select component for filtering by job locations or positions
  const renderSelect = (type, label, values) => (
    <FormControl fullWidth sx={{ m: 1, minWidth: 200 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={filters[type]}
        onChange={(e) => handleFilterChange(type, e.target.value)}
        renderValue={(selected) => selected.join(', ')}
        label={label}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            <Checkbox checked={filters[type].includes(value)} />
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <>
      <Header />
      <div className="career-label">
        <div className="pre-label">{t('career')}</div>
        <div className="after-label">{t('opportunities')}</div>
      </div>
      <div className={`career-page-wrapper ${!storedJobs.length && !currentUser ? 'vh100' : ''}`}>
        {currentUser && (
          <div className="new-career-opportunity-form">
            <TextField
              value={formData.position}
              onChange={(e) => handleInputChange('position', e.target.value)}
              placeholder={t('Position name')}
              sx={{ mb: 2 }}
              fullWidth
              size="small"
            />
            <ReactQuill
              value={formData.description}
              onChange={(value) => handleInputChange('description', value)}
              className="custom-quill"
              placeholder={t('Job description')}
              modules={{
                toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['link']],
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={isSalaryVisible} onChange={(e) => setIsSalaryVisible(e.target.checked)} />}
              label={t('Include salary')}
              sx={{ my: 2 }}
            />
            {isSalaryVisible && (
              <TextField
                value={formData.salary}
                onChange={(e) => handleInputChange('salary', e.target.value)}
                placeholder={t('Salary')}
                sx={{ mb: 2 }}
                fullWidth
                size="small"
              />
            )}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>{t('location')}</InputLabel>
              <Select
                multiple
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                renderValue={(selected) => selected.join(', ')}
                label={t('Location')}
              >
                {Locations.map((loc) => (
                  <MenuItem key={loc.value} value={loc.value}>
                    <Checkbox checked={formData.location.includes(loc.value)} />
                    {loc.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <CustomButton
              label={editingJob ? t('update job') : t('add job')}
              onClick={onSubmit}
              disabled={!formData.position || !formData.description || !formData.location.length || !formData.formLink}
            />
          </div>
        )}
        <div className="filters-container">
          {renderSelect('locations', t('Filter location'), uniqueValues.locations)}
          {renderSelect('positions', t('Filter position'), uniqueValues.positions)}
        </div>
        {pagination.currentItems.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            currentUser={currentUser}
            readMore={readMore}
            onReadMore={() => setReadMore((prev) => ({ ...prev, [job.id]: !prev[job.id] }))}
            onDelete={() => deleteDoc(doc(db, 'jobs', job.id))}
            onEdit={() => {
              setFormData({
                position: job.position.join(', '),
                salary: job.salary,
                description: job.description,
                location: job.location,
                formLink: job.formLink,
              });
              setIsSalaryVisible(!!job.salary);
              setEditingJob(job);
            }}
          />
        ))}
        {pagination.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange} // Ваша функция для изменения страницы
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Career;
