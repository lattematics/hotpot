import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path based on your folder structure
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-container">
      <Navbar />

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


      <section className="help-section">
        <h2>What types of help you want?</h2>
        <div className="help-cards">
          <HelpCard title="Available Resources" desc="Recommendations based on your needs" />
          <HelpCard title="Peer Support" desc="Connect with fellow students" />
          <HelpCard title="Self-Assessment" desc="Understand your mental health status" />
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

function HelpCard({ title, desc }) {
    return (
      <div className="help-card">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  }