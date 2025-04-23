import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">HealthUs</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
