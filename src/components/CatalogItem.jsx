import React from 'react'
import MyButton from './UI/button/MyButton';

const CatalogItem = (props) => {

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number} </strong>
        <p>Название: {props.product.name}</p>
        <p>Цвет: {props.product.color}</p>
        <p>Цена: {props.product.price}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.product)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default CatalogItem;