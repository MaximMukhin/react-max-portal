import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import CartItem from './CartItem';

const Cart = ({ remove }) => {
   const [cart] = useRecoilState(cartState)
console.log(cart);

const result = []

for (const product of cart) {
  const finded = result.find((el) => el.article === product.article)
  if (finded) {
    finded.qty++;
    continue
  }
  result.push({...product, qty: 1} )
}


   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>Cart</h1>
         <div className='cart'>
         {result.map((productCart, index) =>
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