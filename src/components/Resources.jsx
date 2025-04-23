// src/components/Resources.jsx

import React, { useState, useEffect } from 'react';
import '../style.css';                              // your global styles
import '@fortawesome/fontawesome-free/css/all.css';  // FontAwesome icons

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('/resource.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`fetch failed: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setResources(data))
      .catch(err => console.error('JSON load error:', err));
  }, []);

  return (
    <main>
      <div className="resource-grid">
        {resources.map(item => (
          <div key={item.name} className="resource-card">
            
            {/* Top icons */}
            <div className="icons">
              {['clock', 'desktop', 'piggy-bank'].map(icon => (
                <i key={icon} className={`fas fa-${icon}`}></i>
              ))}
            </div>

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
            />

            {/* Heart (save) */}
            <i className="far fa-heart heart"></i>

            {/* Content */}
            <div className="card-content">
              <h3>{item.name}</h3>
              <p className="meta">
                Type of Service: {item.type.replace(/[\[\]]/g, '')}<br/>
                Location: {item.location.replace(/[\[\]]/g, '')}<br/>
                Age Group: {item.age}<br/>
                {item['additional-info'].includes('Need Appointment') && 'Appointment Needed'}
              </p>
              <a
                className="cta"
                href={item.website.startsWith('http')
                  ? item.website
                  : `https://${item.website}`
                }
                target="_blank"
                rel="noreferrer"
              >
                More Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
