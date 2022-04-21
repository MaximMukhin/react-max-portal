import React from 'react'
import CartItem from './CartItem';

const Cart = ({ productsCart, remove }) => {
   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>Cart</h1>
         {productsCart.map((productCart, index) =>
            <CartItem remove={remove} number={index + 1} productCart={productCart} key={productCart.article} />
         )}
      </div>
   );
};

export default Cart;