import React, { useState } from 'react';
import '../../index.css';
import './index.css';

const Register = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  function onSubmit(event) {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    alert('User has been regisered');
    window.location = '/';
  }

  function handleChange(event) {
    setUser((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <main id="register">
        <div>
          <h2>Register</h2>
          <form onSubmit={onSubmit}>
            <label className="first-name">
              <span>First name</span>
              <input
                type="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </label>
            <label className="last-name">
              <span>Last name</span>
              <input
                type="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </label>
            <label className="email">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <label className="password">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
            <input className="submit" type="submit" value="Register" />
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
