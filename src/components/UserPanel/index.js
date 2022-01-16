import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../index.css';
import './index.css';

const UserPanel = () => {
  function logout(event) {
    event.preventDefault();
    localStorage.removeItem('user');
    window.location.reload();
  }

  function remove(event) {
    event.preventDefault();
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <>
      <main id="user-panel">
        <div>
          <h2>User panel</h2>
          <form>
            <button className="logout" onClick={logout}>
              <Link to="/">Logout</Link>
            </button>
            <button className="delete" onClick={remove}>
              <Link to="/">Delete account</Link>
            </button>
            <Outlet />
          </form>
        </div>
      </main>
    </>
  );
};

export default UserPanel;
