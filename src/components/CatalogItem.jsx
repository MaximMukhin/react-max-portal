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

  /*   const updateCart = () => {
      setCart([...cart, product])
    } */

  const updateCart = () => {

    const resultCart = []

    for (const product of cart) {
      const finded = cart.find((el) => el.article === product.article)
      if (finded) {
        console.log('Артикул совпал');
      }

    }

    setCart([...cart, { ...product, qty: 1 }])
    console.log('setCart', [...cart, { ...product, qty: 1 }]);

  }

//  const result = []
//  for (const product of cart) {
//     const finded = result.find((el) => el.article === product.article)
//     if (finded) {
//        finded.qty++;
//        continue
//     }
//     result.push({ ...product, qty: 1 })
//  }




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