import React from "react";
import "./JobCard.css";
import { FaMapMarkerAlt, FaClock, FaBuilding } from "react-icons/fa";

export default function JobCard({ title, company, location, years, salary }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3 className="job-title">{title}</h3>
        <span className="job-salary">💰 {salary}</span>
      </div>
      <div className="job-info">
        <p>
          <FaBuilding className="job-icon" /> {company}
        </p>
        <p>
          <FaMapMarkerAlt className="job-icon" /> {location}
        </p>
        <p>
          <FaClock className="job-icon" /> {years} Years Experience
        </p>
      </div>
      <button className="apply-btn">Apply Now ➤</button>
    </div>
  );
}
