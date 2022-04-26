import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import CartItem from './CartItem';

const Cart = () => {

   const [cart, setCart] = useRecoilState(cartState)

   const result = []

   for (const product of cart) {
      const finded = result.find((el) => el.article === product.article)
      if (finded) {
         finded.qty++;
         continue
      }
      result.push({ ...product, qty: 1 })
   }

   const decrement = () => {
      console.log('decrement');

   }

   const increment = () => {
      console.log('increment');

   }

   const removeCartItem = (index) => {
      console.log('removeCartItem', index);
      console.log('cart', cart);
      setCart([...cart, cart.splice(index)])
   }

   const clgState = () => {
      console.log(cart);
   }

   return (
      <div>


         {cart.length !== 0
            ? <div>
               <h1 style={{ textAlign: 'center' }}>Cart</h1>
               <div className='cart'>
                  {cart.map((productCart, index) =>
                     <CartItem
                        clgState={clgState}
                        decrement={decrement}
                        increment={increment}
                        removeCartItem={removeCartItem}
                        number={index + 1}
                        productCart={productCart}
                        key={index}
                     />
                  )}
               </div>
            </div>

            : <div
               style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '900'
               }}>
               Корзина пустая
            </div>
         }




      </div>
   )
}

export default Cart;