import React, { useState, useEffect } from 'react';
import '../style.css';

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [error, setError]         = useState(null);
  const [loading, setLoading]     = useState(true);

  // filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [ageFilter, setAgeFilter]   = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    fetch('/resource.json')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => {
        setResources(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.toString());
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading resources…</div>;
  if (error)   return <div className="error">Error: {error}</div>;

  const clean = s => s.replace(/[\[\]]/g, '').trim();

  // build type list
  const types = Array.from(
    new Set(
      resources
        .flatMap(r => clean(r.type).split(','))
        .map(t => t.trim())
    )
  ).sort();

  // helper for age ranges
  const parseRange = str => {
    if (str === 'All') return [0, Infinity];
    if (str.includes('-')) {
      const [lo, hi] = str.split('-').map(n => parseInt(n, 10));
      return [lo, hi];
    }
    if (str.endsWith('+')) {
      return [parseInt(str, 10), Infinity];
    }
    const n = parseInt(str, 10);
    return [n, n];
  };

  // filtered result
  const filtered = resources.filter(r => {
    // search
    const hay = `${r.name} ${clean(r.about)}`.toLowerCase();
    if (searchTerm && !hay.includes(searchTerm.toLowerCase())) return false;

    // city filter (only Seattle, Kirkland, Online)
    if (cityFilter) {
      const locs = clean(r.location)
        .split(';')
        .map(loc => {
          const parts = loc.trim().split(',').map(p => p.trim());
          return parts.length >= 2 ? parts[1] : parts[0];
        });
      if (!locs.includes(cityFilter)) return false;
    }

    // age filter
    if (ageFilter) {
      const [fLo, fHi] = parseRange(ageFilter);
      const [rLo, rHi] = parseRange(r.age);
      if (rHi < fLo || rLo > fHi) return false;
    }

    // type filter
    if (typeFilter) {
      const available = clean(r.type).split(',').map(t => t.trim());
      if (!available.includes(typeFilter)) return false;
    }

    return true;
  });

  return (
    <main className="resources-page">
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search by name / description…"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {/* Location dropdown forced to these three */}
        <select
          value={cityFilter}
          onChange={e => setCityFilter(e.target.value)}
        >
          <option value="">Location</option>
          <option value="Seattle">Seattle</option>
          <option value="Kirkland">Kirkland</option>
          <option value="Online">Online</option>
        </select>

        <select
          value={ageFilter}
          onChange={e => setAgeFilter(e.target.value)}
        >
          <option value="">All Ages</option>
          {Array.from(new Set(resources.map(r => r.age)))
            .sort((a, b) => parseRange(a)[0] - parseRange(b)[0])
            .map(age => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
        </select>

        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {types.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <button
          className="clear"
          onClick={() => {
            setSearchTerm('');
            setCityFilter('');
            setAgeFilter('');
            setTypeFilter('');
          }}
        >
          Clear
        </button>
      </div>

      <div className="resource-grid">
        {filtered.length === 0 && (
          <div className="no-results">No resources match your criteria.</div>
        )}
        {filtered.map(r => (
          <div key={r.name} className="resource-card">
            <div className="icons">
              {r.hours && <i className="far fa-clock" title="Hours"></i>}
              {clean(r.location).includes('Online') && (
                <i className="fas fa-desktop" title="Online"></i>
              )}
              {r.cost === '$0' && (
                <i className="fas fa-piggy-bank" title="Free"></i>
              )}
            </div>
            <img src={r.image} alt={r.name} loading="lazy" />
            <i className="far fa-heart heart"></i>
            <div className="card-content">
              <h3>{r.name}</h3>
              <p className="meta">
                Type: {clean(r.type)}
                <br />
                Location:{' '}
                {clean(r.location)
                  .split(';')
                  .map(l => l.trim())
                  .join(', ')}
                <br />
                Age: {r.age}
              </p>
              <a
                className="cta"
                href={
                  r.website.startsWith('http')
                    ? r.website
                    : `https://${r.website}`
                }
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
