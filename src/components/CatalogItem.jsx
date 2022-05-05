import { Button } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import { copyDeep } from '../utils/copyDeep';
import { StyledProductItems } from './styled/StyledProductItems'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { rubFormat } from '../utils/rubFormat';

const CatalogItem = (props) => {
  
  const {
    number,
    product,
  } = props

  const [cart, setCart] = useRecoilState(cartState)

  const AddCart = () => {
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
    <StyledProductItems>
      <div>
        <p>index: {number} </p>
        <hr style={{ margin: '15px 0' }} />
        <img
          style={{ maxWidth: '150px', borderRadius: '5px' }}
          src={`/images/${product.image}`}
          alt="картинка" 
        />
        <p>Название: {product.name}</p>
        <p>Цвет: {product.color}</p>
        <p>Цена: {rubFormat(product.price)}</p>
        <p>Склад: {product.available}шт</p>
      </div>
      <div>
        {product.available !== 0
          ? <Button
            variant="outlined"
            color="info"
            endIcon={<AddShoppingCartIcon />}
            onClick={AddCart}
          >
            Купить
          </Button>



          : <Button
            variant="outlined"
            color="info"
            endIcon={<AddShoppingCartIcon />}
            disabled
          >
            Купить
          </Button>
        }


      </div>
    </StyledProductItems>
  )
}

export default CatalogItem;