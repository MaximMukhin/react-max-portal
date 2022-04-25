import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import { StyledButton } from './styled/StyledButton';

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
      <div>
        <StyledButton onClick={updateCart}>Купить</StyledButton>
      </div>
    </div>
  )
}

export default CatalogItem;