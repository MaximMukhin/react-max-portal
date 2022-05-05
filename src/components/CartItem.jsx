import { Button, IconButton } from '@mui/material';
import React from 'react';
/* import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart'; */
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { StyledProductItems } from './styled/StyledProductItems';
import { rubFormat } from '../utils/rubFormat';

const CartItem = ({
   productCart,
   number,
   removeCartItem,
   decrement,
   increment,
   clgState }) => {

   /*    const [cart, setCart] = useRecoilState(cartState) */

   return (
      <StyledProductItems>
         <div>
            <div >
            <p>index: {number}</p>
            <hr style={{ margin: '15px 0' }} />
            <img
               style={{ maxWidth: '100px', borderRadius: '5px' }}
               src={`/images/${productCart.image}`} alt="картинка"
            />
            <p>Артикул: {productCart.article}</p>
            <p>Название: {productCart.name}</p>
            <p>Цвет: {productCart.color}</p>
               <p>Цена: {rubFormat(productCart.price)}</p>
               <p>Общая цена: {rubFormat(productCart.price * productCart.qty)}</p>
               <p>Количество:

                  <IconButton
                     aria-label="-"
                     color="info"
                     onClick={() => decrement()}>
                     <IndeterminateCheckBoxIcon />
                  </IconButton>

                  {productCart.qty}

                  <IconButton
                     aria-label="+"
                     color="info"
                     onClick={() => increment()}>
                     <AddBoxIcon />
                  </IconButton>
            </p>
         </div>
         <hr style={{ margin: '5px 0' }} />
         <div>

               <Button
                  style={{ marginRight: '10px' }}
                  variant="outlined"
                  color="error"
                  endIcon={<DeleteIcon />}
               onClick={() => removeCartItem(number)}
               >
                  Удалить
               </Button>

               <Button
                  variant="outlined"
                  color="info"
               onClick={() => clgState(number)}
               >
                  Стейт
               </Button>
            </div>
      </div>
      </StyledProductItems>

   )
}

export default CartItem;