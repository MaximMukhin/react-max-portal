// import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../atoms/products";
import '../styles/App.css'
import CatalogList from "../components/CatalogList";
import Navigation from "../components/Navigation";
//import { copyDeep } from "../utils/copyDeep";

function Catalog() {

   const [products, /* setProducts */] = useRecoilState(productsState)

   //  useEffect(() => {
   //     fetch('http://localhost:3000/products.json').then((res) => {
   //        res.json().then((data) => {
   //           /*             console.log(data); */
   //           setProducts(data)
   //        })
   //     })
   //  }, [setProducts])

//   const decrementQtyProduct = () => {
//      console.log('decrementQtyProduct')
//      const newProducts = copyDeep(products[0])
//      newProducts.article = products.length
//      newProducts.name = newProducts.name + 'ind' + (products.length + 1)
//
//      setProducts([...products, newProducts])
//      console.log('Products', products)
//      console.log('newProducts', newProducts)
//   }

   return (
      <div>
         <Navigation />

         <CatalogList
            title={'Catalog'}
            productProps={products}
         />
         <hr style={{ margin: '15px 0' }} />
      </div>
   )
}

export default Catalog;
