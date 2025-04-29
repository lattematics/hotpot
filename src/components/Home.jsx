import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to HealthUs</h1>
            <p>Personalized Mental Health Resources for College Freshmen</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <img className="hero-image" src="/img/Studying.jpeg" alt="Students studying" />
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <h2>What types of help you want?</h2>
        <div className="help-cards">
          <Link to="/resources" className="help-card">
            <div className="card-top">
              <h3>Available Resources</h3>
              <p>Recommendations based on your needs</p>
            </div>
            <FaArrowRight className="arrow-icon" />
          </Link>

          <Link to="/forum" className="help-card">
            <div className="card-top">
              <h3>Peer Support</h3>
              <p>Connect with fellow students</p>
            </div>
            <FaArrowRight className="arrow-icon" />
          </Link>

          <Link to="/quiz" className="help-card">
            <div className="card-top">
              <h3>Self-Assessment</h3>
              <p>Understand your mental health status</p>
            </div>
            <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Who Are We?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              We are a team of undergraduate students from the University of Washington dedicated to improving mental health support for college freshmen. Our mission is to help students access the resources they need during their transition to college, by leveraging technology and inclusive research.
            </p>
            <a href="/about">
              <button className="about-btn">About Us</button>
            </a>
          </div>
          <img className="about-img" src="/img/Home.jpeg" alt="Brain illustration" />
        </div>
      </section>

    </div>
  );
}
