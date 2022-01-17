import React from 'react';
import '../../index.css';
import './index.css';

function randomIndex(quotes) {
  const quotesArray = Object.keys(quotes).map((key) => [
    Number(key),
    quotes[key],
  ]);
  return Math.floor(Math.random() * quotesArray.length);
}

const Home = (quotes) => {
  const quote = quotes[randomIndex(quotes)];

  return (
    <>
      <main id="home">
        <div>
          <h1>
            <q>{quote.title}</q>
          </h1>
          <h4>{quote.author}</h4>
        </div>
      </main>
    </>
  );
};

export default Home;
