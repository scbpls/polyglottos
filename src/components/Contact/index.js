import React, { useState } from 'react';
import '../../index.css';
import './index.css';

const Contact = () => {
  const [question, setQuestion] = useState({
    email: '',
    title: '',
    description: '',
  });

  // const user = localStorage.getItem('user')
  //   ? JSON.parse(localStorage.getItem('user'))
  //   : undefined;

  // if (user) {
  //   setQuestion.email(user.email);
  // }

  function onSubmit(event) {
    event.preventDefault();
    localStorage.setItem('question', JSON.stringify(question));
    alert('Question has been sent');
    window.location.reload();
  }

  function handleChange(event) {
    setQuestion((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <main id="contact">
        <div>
          <h2>Contact</h2>
          <form onSubmit={onSubmit}>
            <label className="email">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={question.email}
                onChange={handleChange}
              />
            </label>
            <label className="title">
              <span>Title</span>
              <input
                type="title"
                name="title"
                value={question.title}
                onChange={handleChange}
              />
            </label>
            <label className="description">
              <span>Description</span>
              <textarea
                name="description"
                value={question.description}
                onChange={handleChange}
              ></textarea>
            </label>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
