import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import { copyDeep } from '../utils/copyDeep';
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

   const changeQty = (index, dir) => {
      const newCart = copyDeep(cart)
      const qty = newCart[index].qty
      if (qty > 1 && dir === -1) {
         newCart[index].qty += dir
         setCart(newCart)
      } else if (dir === 1) {
         newCart[index].qty += dir
         setCart(newCart)
      }
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
                        decrement={() => changeQty(index, -1)}
                        increment={() => changeQty(index, 1)}
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