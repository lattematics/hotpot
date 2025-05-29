import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Results() {  
  const location = useLocation();
  const tags = location.state?.tags || [];
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('/resource.json')
      .then(res => res.json())
      .then(data => setResources(data))
      .catch(err => console.error('Failed to load resources:', err));
  }, []);

  const matchedResources = resources.filter(resource => {
    const resourceTags = resource.tags?.split(',').map(t => t.trim()) || [];
    const matches = resourceTags.filter(tag => tags.includes(tag));
    return matches.length >= 2;
  });
  

  const clean = (text) => text?.replace(/\[|\]/g, '').trim() || 'N/A';

  return (
    <div className="results-page">
      <h2>Recommended Resources</h2>
      {matchedResources.length > 0 ? (
        <div className="resource-list">
          {matchedResources.map((res, index) => (
            <div className="resource-card" key={index}>
              <h3>{res.name || 'Unnamed Resource'}</h3>
              <p><strong>About:</strong> {clean(res.about)}</p>
              <p><strong>Type:</strong> {clean(res.type)}</p>
              <p><strong>Location:</strong> {clean(res.location)}</p>
              <p><strong>Age Group:</strong> {res.age || 'N/A'}</p>
              <p><strong>Cost:</strong> {res.cost || 'N/A'}</p>
              <p><strong>Phone:</strong> {res.phone || 'N/A'}</p>
              <p>
                <strong>Website:</strong>{' '}
                {res.website && typeof res.website === 'string' && res.website.trim() !== '' ? (
                  <a
                    href={`https://${res.website.replace(/^https?:\/\//, '').trim()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {res.website.replace(/^https?:\/\//, '').trim()}
                  </a>
                ) : (
                  'N/A'
                )}
              </p>
              <p><strong>Hours:</strong> {clean(res.hours)}</p>
              <p><strong>Tags:</strong> {res.tags.split(',').map((tag, idx) => (
                <span className="tag-badge" key={idx}>{tag.trim()}</span>
              ))}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching resources found. Try adjusting your quiz answers or explore all resources manually.</p>
      )}
    </div>
  );
}
