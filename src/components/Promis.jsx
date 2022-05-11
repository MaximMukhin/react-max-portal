import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { productsState } from '../atoms/products';

const Promis = () => {
   const [products,  /* setProducts */] = useRecoilState(productsState)
   const [res, setRes] = useState([])


   /*    const myPromis = new Promise((resolve, reject) => {
   
      }); */

   //  useEffect(() => {
   //     fetch('https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1')
   //        .then((res) => {
   //           res.json().then((data) => {
   //              console.log(data);
   //              setRes(data)
   //           })
   //        })
   //  }, [setRes])

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1')
         .then(response => response.json())
         .then(json => setRes(json))
         .catch(error => console.error(error))
   }, [setRes])

   console.log(res);


   return (
      <div>Promis

         {products.map((product, index) => (
            <div key={index}>
               <p>article: {product.article}</p>
            </div>

         ))}
      </div>
   );
};

export default Promis;