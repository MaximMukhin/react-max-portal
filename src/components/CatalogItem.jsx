import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import { copyDeep } from '../utils/copyDeep';
import { StyledButton } from './styled/StyledButton';

const CatalogItem = (props) => {
  
  const {
    number,
    product,
  } = props

  const [cart, setCart] = useRecoilState(cartState)

  const updateCart = () => {
    const newCart = copyDeep(cart)
    const finded = newCart.find((el) => el.article === product.article)
    if (!finded) {
      setCart([...cart, { ...product, qty: 1 }])
    } else {
      finded.qty++
      setCart(newCart)
    }
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