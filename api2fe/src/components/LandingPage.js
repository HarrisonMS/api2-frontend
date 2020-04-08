import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const items = [
  { name: 'Home', path: '/' },
  { name: 'Posts', path: '/posts' },
];

const LandingPage = () => {
  const location = useLocation();
  return (
    <div>
      <h1>temp LandingPage</h1>
      {items.map(i => (
          <Link
            isactive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </Link>
        ))}
      <button>Enter</button>
    </div>
  )
}
export default LandingPage