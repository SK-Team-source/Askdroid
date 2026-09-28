'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Icon from './Icon';

export default function SearchBar({ defaultType = 'robotics' }) {
  const router = useRouter();
  const [type, setType] = useState(defaultType);
  const [q, setQ] = useState('');
  const [near, setNear] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (near) params.set('near', near);
    const query = params.toString();
    router.push(`/${type}${query ? `?${query}` : ''}`);
  }

  return (
    <form className="search-module" onSubmit={handleSubmit} role="search" aria-label="Directory search">
      <div className="search-module__types" role="tablist" aria-label="Search type">
        <button
          type="button"
          role="tab"
          aria-selected={type === 'robotics'}
          className={`search-type-btn ${type === 'robotics' ? 'active' : ''}`}
          onClick={() => setType('robotics')}
        >
          Robotics
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={type === 'ai'}
          className={`search-type-btn ${type === 'ai' ? 'active' : ''}`}
          onClick={() => setType('ai')}
        >
          AI
        </button>
      </div>

      <div className="search-module__row">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a company, tool or model"
          aria-label="Search term"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <input
          type="text"
          className="search-input"
          placeholder="Near (optional)"
          aria-label="Location"
          value={near}
          onChange={(e) => setNear(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          <Icon name="search" size={17} /> Search
        </button>
      </div>
    </form>
  );
}
