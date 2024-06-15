import React, { useState, useEffect, useContext } from "react";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import CustomButton from "components/customButton/CustomButton";
import Locations from "./Locations.json";
import { db } from "../../Firebase";
import { AuthContext } from "contexts/Context";
import { useTranslation } from "react-i18next";
import { MenuItem, Select, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { ReactComponent as RemoveIcon } from "assets/icons/Remove.svg";
import { ReactComponent as EditIcon } from "assets/icons/Edit.svg";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import "./Career.scss";

const Career = () => {
    const { currentUser } = useContext(AuthContext);
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [formLink, setFormLink] = useState("https://forms.monday.com/forms/841dbe78d20737008c792d3f09157e85?r=use1");
    const [storedJobs, setStoredJobs] = useState([]);
    const [readMore, setReadMore] = useState({});
    const [editingJob, setEditingJob] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isSalaryVisible, setIsSalaryVisible] = useState(false);
    const { t } = useTranslation();

    // Adding new jobs to the database
    const onSubmit = async () => {
        if (isEditing) {
            // Updating an existing job
            await updateDoc(doc(db, "jobs", editingJob.id), {
                position,
                description,
                salary: isSalaryVisible ? salary : "",
                location,
                formLink,
            });
            setIsEditing(false);
            setEditingJob(null);
        } else {
            // Creating a new job
            const docRef = await addDoc(collection(db, "jobs"), {
                position,
                description,
                salary: isSalaryVisible ? salary : "",
                location,
                formLink,
            });
            console.log("Document written with ID: ", docRef.id);
        }
        setPosition("");
        setDescription("");
        setSalary("");
        setLocation("");
        setIsSalaryVisible(false);
    };

    // Fetching the jobs from the database
    useEffect(() => {
        const jobsRef = collection(db, "jobs");
        const unsubscribe = onSnapshot(jobsRef, (querySnapshot) => {
            const jobsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setStoredJobs(jobsData);
        });
        return unsubscribe; // Clean up the listener when the component unmounts
    }, []);

    // Deleting jobs from the database
    const deleteJob = async (id) => {
        await deleteDoc(doc(db, "jobs", id));
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
            <div className={`career-page-wrapper ${storedJobs.length === 0 ? "vh100" : ""}`}>
                <div className="career-label">
                    <div className="pre-label">{t("career")}</div>
                    <div className="after-label">{t("opportunities")}</div>
                </div>
                {storedJobs.length === 0 && !currentUser ? <div className="no-opportunities">{t("No opportunities today")}</div> : <></>}
                {currentUser && (
                    <div className="new-career-opportunity-form">
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            placeholder="Position Name"
                            sx={{ marginBottom: 2, input: { color: "var(--color-dark)" } }}
                        />
                        <TextField
                            type="text"
                            size="small"
                            multiline
                            rows={6}
                            maxRows={4}
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Job description"
                            sx={{ marginBottom: 2 }}
                        />
                        <div className="salary-checkbox">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isSalaryVisible}
                                        onChange={(e) => setIsSalaryVisible(e.target.checked)}
                                    />
                                }
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
                                sx={{ marginBottom: 2, input: { color: "var(--color-dark)" } }}
                            />
                        )}
                        <Select
                            size="small"
                            fullWidth
                            value={location}
                            onChange={handleChange}
                            sx={{ marginBottom: 2, color: "var(--color-dark)" }}
                        >
                            {Locations.map((location) => (
                                <MenuItem
                                    key={location.value}
                                    value={location.value}
                                >
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
                            sx={{ marginBottom: 2, input: { color: "var(--color-dark)" } }}
                        />
                        <CustomButton
                            label={isEditing ? "Update Job" : "Add new job"}
                            onClick={onSubmit}
                            disabled={disabled}
                            title={disabled ? "Please fill in all fields" : ""}
                            className="add-new-job-button"
                        />
                    </div>
                )}
                {storedJobs.map((job) => (
                    <div
                        className="job-card-wrapper"
                        key={job.id}
                    >
                        <ul className="job-card">
                            <li variant="h5">
                                <p>Position:</p>
                                {job.position}
                            </li>
                            <li className={`description ${readMore[job.id] ? "description-more" : ""}`}>
                                <div className="description-label">Description:</div>
                                <div className={`description-job ${readMore[job.id] ? "description-job-more" : ""}`}>{job.description}</div>
                            </li>
                            <div className="read-more-button">
                                <div onClick={() => handleReadMore(job.id)}>{readMore[job.id] ? "Read less ⤴" : "Read more ⤵"}</div>
                            </div>
                            {job.salary && (
                                <li>
                                    <p>Salary:</p>${job.salary}
                                </li>
                            )}
                            <li>
                                <p>Location:</p>
                                {job.location}
                            </li>
                        </ul>
                        <div className="button-box">
                            {currentUser && (
                                <div className="manage-buttons">
                                    <div
                                        onClick={() => deleteJob(job.id)}
                                        className="delete-job-button"
                                    >
                                        <RemoveIcon />
                                    </div>
                                    <div
                                        onClick={() => startEditingJob(job)}
                                        className="edit-job-button"
                                    >
                                        <EditIcon />
                                    </div>
                                </div>
                            )}
                            <div>
                                <a
                                    href={job.formLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fill-out-form-button"
                                >
                                    <CustomButton label="Fill out form"></CustomButton>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Career;
