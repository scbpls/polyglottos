import * as React from 'react';

const Basket = () => {
  console.log(JSON.parse(localStorage.getItem('basket')));

  return (
    <>
      <main id="basket">
        <div></div>
      </main>
    </>
  );
};

export default Basket;
