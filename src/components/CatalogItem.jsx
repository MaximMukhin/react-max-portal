import React from 'react';
import MyButton from './UI/button/MyButton';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';

const CatalogItem = (props) => {
  const {
    number,
    product,
  } = props

  const [cart, setCart] = useRecoilState(cartState)

  const updateCart = () => {
    setCart([...cart, product])
  }

  return (
    <div className="post">
      <div className="post__content">
        <p>index: {number} </p>
        <hr style={{ margin: '15px 0' }} />
        <img
          style={{ maxWidth: '150px', borderRadius: '5px' }}
          src={`/images/${product.image}`}
          alt="картинка" 
        />
        <p>Название: {product.name}</p>
        <p>Цвет: {product.color}</p>
        <p>Цена: {product.price}руб</p>
        <p>Склад: {product.available}шт</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={updateCart}>Купить</MyButton>
      </div>
    </div>
  )
}

export default CatalogItem;