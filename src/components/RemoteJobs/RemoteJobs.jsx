import React from 'react';
import './RemoteJobs.css';
import { FaBuilding, FaGlobe, FaLaptop } from 'react-icons/fa';

const jobs = [
  { title: "Frontend Developer", company: "TechCorp Inc.", location: "Remote" },
  { title: "Backend Engineer", company: "Innovate Labs", location: "Remote" },
  { title: "UI/UX Designer", company: "DesignPro", location: "Remote" },
  { title: "Data Scientist", company: "DataSolutions", location: "Remote" },
];

const RemoteJobs = () => {
  return (
    <div className="remote-jobs-container">
      <h2>🌍 Explore Remote Jobs</h2>
      <div className="remote-jobs">
        {jobs.map((job, index) => (
          <div key={index} className="remote-job-card">
            <div className="job-header">
              <FaLaptop className="job-icon" />
              <h3>{job.title}</h3>
            </div>
            <p><FaBuilding className="icon" /> {job.company}</p>
            <p><FaGlobe className="icon" /> {job.location}</p>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoteJobs;
