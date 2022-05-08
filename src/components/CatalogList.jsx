import React from 'react';
import CatalogItem from './CatalogItem';

//import { useRecoilState } from 'recoil';
//import { productsState } from "../atoms/products";
//import { cartState } from '../atoms/cart';

import { StyledProductList } from '../components/styled/StyledProductList'

const CatalogList = ({ productProps, title }) => {

//   const [products] = useRecoilState(productsState)
//   const [cart, setCart] = useRecoilState(cartState)

   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         <StyledProductList>
            {productProps.map((product, index) =>
               <CatalogItem
                  number={index + 1}
                  productProps={product}
                  key={product.article}
               />
            )}
         </StyledProductList>
      </div>
   )
}

export default CatalogList;