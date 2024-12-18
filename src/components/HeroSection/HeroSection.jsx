import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">FIND YOUR DREAM JOB HERE!</h1>
        <p className="hero-subtitle">
          Over <span className="highlight">15,000+</span> opportunities waiting for you
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search job titles, companies, or keywords..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="job-categories">
          <span className="quick-text">Popular Searches:</span>
          <div className="job-tags">
            {["Developer", "Designer", "Marketing", "Remote", "Part-time", "Finance"].map((tag) => (
              <button key={tag} className="job-tag-btn">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://img.freepik.com/free-vector/job-search-concept-illustration_114360-1018.jpg?w=740&t=st=1702900000~exp=1702900600~hmac=04e2d0f38f5466d72b25fcf1b8915b1695f37d679f8cf063637db09c6d1e626b"
          alt="Job Search"
        />
      </div>
    </section>
  );
}
