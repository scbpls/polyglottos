import React, { useState, useEffect } from 'react';
import '../../index.css';
import './index.css';

const Basket = () => {
  const basket_tmp = localStorage.getItem('basket')
    ? JSON.parse(localStorage.getItem('basket'))
    : { offer1: 0, offer2: 0, offer3: 0 };

  const [basket, setBasket] = useState(basket_tmp);

  function remove(event) {
    setBasket((previousData) => ({
      ...previousData,
      [event]: 0,
    }));
  }

  function substract(event) {
    setBasket((previousData) => ({
      ...previousData,
      [event]: basket[event]--,
    }));
  }

  function add(event) {
    setBasket((previousData) => ({
      ...previousData,
      [event]: basket[event]++,
    }));
  }

  function sum() {
    return (
      basket.offer1 * 4.79 +
      basket.offer2 * 11.79 +
      basket.offer3 * 40.79
    ).toFixed(2);
  }

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <main id="basket">
        <div>
          <h2>Basket</h2>
          <section>
            {basket.offer1 !== 0 ? (
              <div>
                <div>
                  <button onClick={() => remove('offer1')}>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                  <h4>Starter:</h4>
                </div>
                <p>{basket.offer1}x $4,79</p>
              </div>
            ) : undefined}
            {basket.offer2 !== 0 ? (
              <div>
                <div>
                  <button onClick={() => remove('offer2')}>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                  <h4>Amateur:</h4>
                </div>
                <p>{basket.offer2}x $11,79</p>
              </div>
            ) : undefined}
            {basket.offer3 !== 0 ? (
              <div>
                <div>
                  <button onClick={() => remove('offer3')}>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                  <h4>Proffesional:</h4>
                </div>
                <p>{basket.offer3}x $40,79</p>
              </div>
            ) : undefined}
          </section>
          <div>
            <h3>Total:</h3>
            <p>${sum()}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Basket;
