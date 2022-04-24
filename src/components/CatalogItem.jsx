import React from 'react';
import MyButton from './UI/button/MyButton';

const CatalogItem = (props) => {

  return (
    <div className="post">
      <div className="post__content">
        <p>index: {props.number} </p>
        <hr style={{ margin: '15px 0' }}/>
        <img style={{ maxWidth: '150px', borderRadius: '5px' }} src={`/images/${props.product.image}`} alt="картинка" />
        <p>Название: {props.product.name}</p>
        <p>Цвет: {props.product.color}</p>
        <p>Цена: {props.product.price}руб</p>
        <p>Склад: {props.product.available}шт</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.addToCart(props.product)}>Купить</MyButton>
      </div>
    </div>
  )
}

export default CatalogItem;