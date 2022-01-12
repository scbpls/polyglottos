import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <header>Polyglottos</header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
