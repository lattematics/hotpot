import React, { useState, useEffect } from 'react';
import '../style.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Resources() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/resource.json')
      .then(r => r.json())
      .then(setList)
      .catch(err => console.error('JSON load error:', err));
  }, []);

  return (
    <div className="resource-grid">
      {list.map(item => (
        <div key={item.name} className="resource-card">
          <div className="icons">
            {['clock','desktop','piggy-bank'].map(ic => (
              <i key={ic} className={`fas fa-${ic}`}></i>
            ))}
          </div>
          <img src={item.image} alt={item.name} />
          <i className="far fa-heart heart"></i>
          <div className="card-content">
            <h3>{item.name}</h3>
            <p className="meta">
              Type: {item.type.replace(/[\[\]]/g,'')}<br/>
              Location: {item.location.replace(/[\[\]]/g,'')}<br/>
              Age: {item.age}<br/>
              {item['additional-info'].includes('Need Appointment') && 'Appointment Needed'}
            </p>
            <a
              className="cta"
              href={item.website.startsWith('http')
                ? item.website
                : `https://${item.website}`}
              target="_blank"
              rel="noreferrer"
            >
              More Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
