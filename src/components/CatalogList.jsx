import React from 'react'
import CatalogItem from './CatalogItem';

const CatalogList = ({ products, title, addToCart }) => {

   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         {products.map((product, index) =>
            <CatalogItem addToCart={addToCart} number={index + 1} product={product} key={product.article} />
         )}
      </div>
   )
}

export default CatalogList;