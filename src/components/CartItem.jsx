import React from 'react';
import { StyledButton } from './styled/StyledButton';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';

const CartItem = ({ productCart, number, removeCartItem, decrement, increment, clgState }) => {

   const [cart, setCart] = useRecoilState(cartState)

   return (
      <div className="post">
         <div className="post__content">
            <p>index: {number}</p>
            <hr style={{ margin: '15px 0' }} />
            <img
               style={{ maxWidth: '100px', borderRadius: '5px' }}
               src={`/images/${productCart.image}`} alt="картинка"
            />
            <p>Артикул: {productCart.article}</p>
            <p>Название: {productCart.name}</p>
            <p>Цвет: {productCart.color}</p>
            <p>Цена: {productCart.price}.руб</p>
            <p>Общая цена: {productCart.price * productCart.qty}.руб</p>
            <p>Количество:
               <StyledButton onClick={() => decrement()}>-</StyledButton>
               {productCart.qty}
               <StyledButton onClick={() => increment()}>+</StyledButton>
            </p>
         </div>
         <hr style={{ margin: '5px 0' }} />
         <div>
            <StyledButton
               onClick={() => removeCartItem(number)}
            >Удалить</StyledButton>
            <StyledButton
               onClick={() => clgState(number)}
            >Стейт</StyledButton>
         </div>

      </div>
   )
}

export default CartItem;