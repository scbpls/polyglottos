import React, { useState, useEffect } from 'react';
import '../../index.css';
import './index.css';

const Shop = () => {
  const cart_tmp = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { offer1: 0, offer2: 0, offer3: 0 };

  const [cart, setcart] = useState(cart_tmp);

  function add(event) {
    setcart((previousData) => ({
      ...previousData,
      [event]: cart[event]++,
    }));
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <main id="shop">
        <h1>PolyglottosPlus</h1>
        <div>
          <section className="s1">
            <h3>Starter</h3>
            <p>for a month</p>
            <div>
              <h4>$4,79</h4>
              <span>$4,79 per month</span>
            </div>
            <div>
              <p>Add to cart</p>
              <button onClick={() => add('offer1')}>
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
          </section>
          <section className="s2">
            <h3>Amateur</h3>
            <p>for a quarter</p>
            <div>
              <h4>$11,79</h4>
              <span>$3,93 per month</span>
            </div>
            <div>
              <p>Add to cart</p>
              <button onClick={() => add('offer2')}>
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
          </section>
          <section className="s3">
            <h3>Proffesional</h3>
            <p>for a year</p>
            <div>
              <h4>$40,79</h4>
              <span>$3,40 per month</span>
            </div>
            <div>
              <p>Add to cart</p>
              <button onClick={() => add('offer3')}>
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Shop;
