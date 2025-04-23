import React, { useState, useEffect } from 'react';
import '../style.css';

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [error, setError]       = useState(null);

  useEffect(() => {
    fetch('/resource.json')
      .then(res => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then(data => setResources(data))
      .catch(err => setError(err.toString()));
  }, []);

  if (error) {
    return <div className="error">Error loading resources: {error}</div>;
  }
  if (!resources.length) {
    return <div className="loading">Loading resources…</div>;
  }

  return (
    <main>
      <div className="resource-grid">
        {resources.map(item => (
          <div className="resource-card" key={item.name}>
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
