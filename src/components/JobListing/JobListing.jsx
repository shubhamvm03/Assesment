import React from "react";
import "./JobListing.css";
import { FaMapMarkerAlt, FaBuilding, FaBriefcase } from "react-icons/fa";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Innovators",
    location: "New York, NY",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "San Francisco, CA",
  },
  {
    title: "Backend Engineer",
    company: "Cloud Solutions",
    location: "Remote",
  },
  {
    title: "Project Manager",
    company: "Business Hub",
    location: "Chicago, IL",
  },
];

const JobListing = () => {
  return (
    <div className="job-listing-container">
      <h2 className="section-title">Explore Featured Jobs</h2>
      <div className="job-listing">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-card-content">
              <h3 className="job-title">
                <FaBriefcase className="icon" /> {job.title}
              </h3>
              <p className="company">
                <FaBuilding className="icon" /> {job.company}
              </p>
              <p className="location">
                <FaMapMarkerAlt className="icon" /> {job.location}
              </p>
            </div>
            <div className="job-card-footer">
              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
