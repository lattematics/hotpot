import React, { useState, useEffect } from 'react';
import '../style.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('⏳ Fetching /resource.json …');
    fetch('/resource.json')
      .then(res => {
        console.log('✅ fetch status:', res.status);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('📦 JSON data:', data.slice(0,3));
        setResources(data);
      })
      .catch(err => {
        console.error('⚠️ JSON load error:', err);
        setError(err.toString());
      });
  }, []);

  if (error) {
    return <div style={{ padding: '2rem', color: 'red' }}>
      <h2>Error loading resources</h2>
      <pre>{error}</pre>
    </div>;
  }

  if (!resources.length) {
    return <div style={{ padding: '2rem' }}>Loading resources…</div>;
  }

  return (
    <main>
      <div className="resource-grid">
        {resources.map(item => (
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
                href={item.website.startsWith('http') ? item.website : `https://${item.website}`}
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
