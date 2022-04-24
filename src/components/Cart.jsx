import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import CartItem from './CartItem';

const Cart = ({ remove }) => {
   const [cart] = useRecoilState(cartState)


   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>Cart</h1>
         <div className='cart'>
         {cart.map((productCart, index) =>
            <CartItem
               remove={remove}
               number={index + 1}
               productCart={productCart}
               key={index}
            />
            )}
         </div>


      </div>
   )
}

export default Cart;