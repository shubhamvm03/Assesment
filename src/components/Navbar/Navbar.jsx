import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-brand">
          <img
            src="https://www.jobringer.com/images/logonew.svg"
            alt="JobRinger Logo"
          />
        </a>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search jobs, companies, etc."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="navbar-right">
        <a href="/" className="navbar-link">Home</a>
        <a href="/jobs" className="navbar-link">Jobs</a>
        <a href="/employers" className="navbar-link">Employers</a>
        <button className="post-job-btn">Post a Job</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}
