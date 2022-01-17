import React, { useState, useEffect } from 'react';
import '../../index.css';
import './index.css';

const Cart = () => {
  const cart_tmp = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { offer1: 0, offer2: 0, offer3: 0 };

  const [cart, setcart] = useState(cart_tmp);

  function remove(event) {
    setcart((previousData) => ({
      ...previousData,
      [event]: 0,
    }));
  }

  function substract(event) {
    setcart((previousData) => ({
      ...previousData,
      [event]: cart[event]--,
    }));
  }

  function add(event) {
    setcart((previousData) => ({
      ...previousData,
      [event]: cart[event]++,
    }));
  }

  function sum() {
    return (
      cart.offer1 * 4.79 +
      cart.offer2 * 11.79 +
      cart.offer3 * 40.79
    ).toFixed(2);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <main id="cart">
        <div>
          <h2>Cart</h2>
          {cart.offer1 === 0 && cart.offer2 === 0 && cart.offer3 === 0 ? (
            <h3>Empty</h3>
          ) : (
            <section>
              {cart.offer1 !== 0 ? (
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
                    <p>{cart.offer1}</p>
                    <button onClick={() => add('offer1')}>
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              ) : undefined}
              {cart.offer2 !== 0 ? (
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
                    <p>{cart.offer2}</p>
                    <button onClick={() => add('offer2')}>
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              ) : undefined}
              {cart.offer3 !== 0 ? (
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
                    <p>{cart.offer3}</p>
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

export default Cart;
