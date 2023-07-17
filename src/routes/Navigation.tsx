import { Suspense } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Route, NavLink, Routes, Navigate } from 'react-router-dom';
import { routes } from './router';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>    
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>

              {
                routes.map(({ to, name }) => (
                  <li key={ to }>
                    <NavLink 
                      to={ to } 
                      className={ ({ isActive }) => isActive ? 'nav-active' : ''}>
                      { name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({ to, path, Component }) => (
                <Route 
                  key={ to }
                  path={ path } 
                  element={ <Component /> } />
              ))
            }
            <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}