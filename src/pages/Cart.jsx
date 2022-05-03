import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import { copyDeep } from '../utils/copyDeep';
import CartItem from '../components/CartItem';
import Navigation from '../components/Navigation';
import { StyledProductList } from '../components/styled/StyledProductList'

const Cart = () => {

   const [cart, setCart] = useRecoilState(cartState)

   //const result = []

   //for (const product of cart) {
   //   const finded = result.find((el) => el.article === product.article)
   //   if (finded) {
   //      finded.qty++;
   //      continue
   //   }
   //   result.push({ ...product, qty: 1 })
   //}

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
      const newCart = copyDeep(cart)
      newCart.splice(index, 1)
      setCart(newCart)
   }

   const clgState = (index) => {
      console.log(cart);
      console.log(index);
   }



   return (
      <div>
         <Navigation />
         {cart.length !== 0
            ? <div>
               <h1 style={{ textAlign: 'center' }}>Cart</h1>
               <StyledProductList>
                  {cart.map((productCart, index) =>
                     <CartItem
                        clgState={clgState}
                        decrement={() => changeQty(index, -1)}
                        increment={() => changeQty(index, 1)}
                        removeCartItem={removeCartItem}
                        number={index}
                        productCart={productCart}
                        key={index}
                     />
                  )}
               </StyledProductList>
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