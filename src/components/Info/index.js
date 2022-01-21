import React from 'react';
import '../../index.css';
import './index.css';

const Info = () => {
  return (
    <>
      <main id="info">
        <div>
          <section className="s s1">
            <h3>Ideal for:</h3>
            <ul>
              <li>Students</li>
              <li>People working a lot</li>
              <li>Travellers</li>
            </ul>
          </section>
          <section className="s2">
            <h3>Our innovations</h3>
            <ul>
              <li>Listen-and-repeat playlists – perfect during commuting</li>
              <li>RepeateTillYouSucceed&reg; wordlists</li>
              <li>Recordings only from native speakers</li>
            </ul>
          </section>
          <section className="s3">
            <h3>Listen-and-repeat playlists</h3>
            <p>
              No time through a busy day?
              <br />
              Repeat while driving a car or sitting in a public transport.
              <br />
              Our native speakers will let you learn perfect pronunciation.
              <br/>
              Just put your headphones on and relax.
            </p>
          </section>
          <section className="s4">
            <h3>RepeateTillYouSucceed&reg; word lists</h3>
            <p>
              Our innovative interactive word list.
              <br />
              At first you see a word list with your native language only. You
              check your learned-language version and then you mark how well you
              know it. The better you know it, the later you'll repeat it.
            </p>
          </section>
          <section className="s5">
            <h3>PolyglottosPlus</h3>
            <p>
              For only $4,79 a month, $12,69 a quarter or $49,79 a year you get
              access to our exciting exclusive content – seasonal and specialized vocabulary.
              Want to go into economics or become a fitness guru? With PolyglottosPlus everything is possible.
              <br />
              PolyglottosPlus is also ad-free.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Info;
