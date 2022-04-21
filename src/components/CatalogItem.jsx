import React from 'react'
import MyButton from './UI/button/MyButton';

const CatalogItem = (props) => {

  return (
    <div className="post">
      <div className="post__content">
<<<<<<< HEAD
        <p>index: {props.number} </p>
        <hr style={{ margin: '15px 0' }}/>
=======
        <strong>{props.number} </strong>
>>>>>>> de2169d3af2593b9b07847d5d4a27f7380aa8c7c
        <img style={{ maxWidth: '200px' }} src={`/images/${props.product.image}`} alt="картинка" />
        <p>Название: {props.product.name}</p>
        <p>Цвет: {props.product.color}</p>
        <p>Цена: {props.product.price}руб</p>
        <p>Склад: {props.product.available}шт</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.addToCart(props.product)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default CatalogItem;