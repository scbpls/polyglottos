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
          {basket.offer1 === 0 && basket.offer2 === 0 && basket.offer3 === 0 ? (
            <h3>Empty</h3>
          ) : (
            <section>
              {basket.offer1 !== 0 ? (
                <div>
                  <div className="d1">
                    <button onClick={() => remove('offer1')}>
                      <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <h4>Starter:</h4>
                  </div>
                  <div className="d2">
                    <p>$4,79</p>
                    <button onClick={() => substract('offer1')}>
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>
                    <p>{basket.offer1}</p>
                    <button onClick={() => add('offer1')}>
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              ) : undefined}
              {basket.offer2 !== 0 ? (
                <div>
                  <div className="d1">
                    <button onClick={() => remove('offer2')}>
                      <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <h4>Amateur:</h4>
                  </div>
                  <div className="d2">
                    <p>$11,79</p>
                    <button onClick={() => substract('offer2')}>
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>
                    <p>{basket.offer2}</p>
                    <button onClick={() => add('offer2')}>
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              ) : undefined}
              {basket.offer3 !== 0 ? (
                <div>
                  <div className="d1">
                    <button onClick={() => remove('offer3')}>
                      <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <h4>Proffesional:</h4>
                  </div>
                  <div className="d2">
                    <p>$40,79</p>
                    <button onClick={() => substract('offer3')}>
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>
                    <p>{basket.offer3}</p>
                    <button onClick={() => add('offer3')}>
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              ) : undefined}
            </section>
          )}

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
