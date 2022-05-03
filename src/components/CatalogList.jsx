import React from 'react';
import CatalogItem from './CatalogItem';

import { StyledProductList } from '../components/styled/StyledProductList'

const CatalogList = ({ products, title }) => {

   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         <StyledProductList>
            {products.map((product, index) =>
               <CatalogItem
                  number={index + 1}
                  product={product}
                  key={product.article}
               />
            )}
         </StyledProductList>
      </div>
   )
}

export default CatalogList;