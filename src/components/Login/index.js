import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../index.css';
import './index.css';

const Login = (users) => {
  const [user, setUser] = useState({ email: '', password: '' });

  function onSubmit(event) {
    event.preventDefault();
    const result = Object.values(users).find((e) => {
      return e.email === user.email;
    });
    if (result && result.password === user.password) {
      localStorage.setItem('user', JSON.stringify(user));
      window.location.reload();
    } else {
      alert('Invalid data');
    }
  }

  function handleChange(event) {
    setUser((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <main id="login">
        <div>
          <h2>Login</h2>
          <form onSubmit={onSubmit}>
            <label className="email">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={setUser.email}
                onChange={handleChange}
              />
            </label>
            <label className="password">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={setUser.password}
                onChange={handleChange}
              />
            </label>
            <input className="submit" type="submit" value="Login" />
          </form>
          <p>
            <span>Has no account yet?</span>
            <Link to="/register">Register</Link>
          </p>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Login;
