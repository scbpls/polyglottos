import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../index.css';
import './index.css';

const Nav = () => {
  const data = localStorage.getItem('user') ? true : false;

  return (
    <>
      <nav id="nav">
        <header>
          <h2>Polyglottos</h2>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          {data ? (
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          ) : null}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {data ? (
            <li>
              <Link to="/cart">
                <ion-icon name="cart-outline"></ion-icon>
              </Link>
            </li>
          ) : undefined}
          <li>
            {data ? (
              <Link to="/user-panel">
                <ion-icon name="person-circle-outline"></ion-icon>
              </Link>
            ) : (
              <Link to="/login">
                <ion-icon name="person-circle-outline"></ion-icon>
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
