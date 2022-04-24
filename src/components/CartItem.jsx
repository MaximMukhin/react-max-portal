import React from 'react';
import MyButton from './UI/button/MyButton';

const CartItem = (props) => {
   /*    console.log('CartItem', props); */
   return (
      <div className="post">
         <div className="post__content">
            <p>index: {props.number}</p>
            <hr style={{ margin: '15px 0' }}/>
            <img style={{ maxWidth: '100px', borderRadius: '5px' }} src={`/images/${props.productCart.image}`} alt="картинка" />
            <p>Артикул: {props.productCart.article}</p>
            <p>Название:</p>
            <p>Цвет:</p>
            <p>Цена:</p>
         </div>
         <div>
            <MyButton onClick={() => props.remove(props.product)}>Удалить</MyButton>
         </div>


      </div>
   )
}

export default CartItem;