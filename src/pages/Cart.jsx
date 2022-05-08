import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import { productsState } from '../atoms/products';
import { copyDeep } from '../utils/copyDeep';
import CartItem from '../components/CartItem';
import Navigation from '../components/Navigation';
import { StyledProductList } from '../components/styled/StyledProductList';
import { rubFormat } from '../utils/rubFormat';

const Cart = () => {

   const [products, /* setProducts */] = useRecoilState(productsState)
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

   // const returnQtyProduct = () => {
   //    const newProduct = copyDeep(products)
   //    const finded = newProduct.find((el) => el.article === productCart.article)
   //    console.log('finded', finded);
   // }

   const clgState = (index, productCart) => {
      console.log(index, productCart.article);
      const findArticle = products.find((el) => el.article === productCart.article)
      console.log('findArticle', findArticle);
      console.log('products', products)
   }

   const sumCart = cart.reduce((sum, cartItem) => {
      return sum + cartItem.price * cartItem.qty
   }, 0)

   return (
      <div>
         <Navigation />

         {cart.length !== 0
            ? <div>
               <h1 style={{ textAlign: 'center' }}>Cart</h1>
               <p style={{ border: '2px solid grey' }}>
                  {rubFormat(sumCart)}
               </p>
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