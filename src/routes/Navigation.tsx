import { BrowserRouter as Router, } from 'react-router-dom';
import { Route, NavLink, Routes, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="home" element={ <ShoppingPage /> } />
          <Route path="about" element={ <h1>About</h1> } />
          <Route path="users" element={ <h1>Users</h1> } />

          <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
        </Routes>
      </div>
    </Router>
  );
}