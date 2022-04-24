import React, { useState } from "react";
/* import Counter from "./components/Counter";
import ImputText from "./components/ImputText"; */
import './styles/App.css'
import CatalogList from "./components/CatalogList";
import Cart from "./components/Cart";
function App() {



   const [products, setProducts] = useState([
      {
         image: "Bella-T01-90.jpg",
         name: "Bella-T01-90",
         article: "Bella-T01-90",
         price: 42000,
         available: 10,
         color: "Белый глянец"
      },
      {
         image: "Natali-T01-90.jpg",
         name: "Natali-T01-90",
         article: "Natali-T01-90",
         price: 40000,
         available: 6,
         color: "Белый глянец"
      },
      {
         image: "Sofia-T01-90.jpg",
         name: "Sofia-T01-90",
         article: "Sofia-T01-90",
         price: 38000,
         available: 3,
         color: "Белый глянец"
      },
      {
         image: "Bella-T01-100.jpg",
         name: "Bella-T01-100",
         article: "Bella-T01-100",
         price: 52000,
         available: 7,
         color: "Красный глянец"
      },
      {
         image: "Natali-T01-100.jpg",
         name: "Natali-T01-100",
         article: "Natali-T01-100",
         price: 50000,
         available: 5,
         color: "Красный глянец"
      },
      {
         image: "Sofia-T01-100.jpg",
         name: "Sofia-T01-100",
         article: "Sofia-T01-100",
         price: 48000,
         available: 9,
         color: "Красный глянец"
      }
   ])

   const [productsCart, setProductsCart] = useState([
      {
         image: "Bella-T01-90.jpg",
         name: "Bella-T01-90",
         article: "Bella-T01-90",
         price: 42000,
         available: 10,
         color: "Белый глянец"
      },
      {
         image: "Natali-T01-90.jpg",
         name: "Natali-T01-90",
         article: "Natali-T01-90",
         price: 40000,
         available: 6,
         color: "Белый глянец"
      }
   ])

   const addToCart = () => {
      console.log('addToCart')
   }


  return (
    <div className="App">
        {/*       <Counter />
        <hr style={{ margin: '15px 0' }} />
        <ImputText /> */}
        <hr style={{ margin: '15px 0' }} />
        <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: '900' }}>React Store</p>
        <hr style={{ margin: '15px 0' }} />

        <CatalogList
           title={'Catalog'}
           products={products}
           addToCart={addToCart}
        />
        <hr style={{ margin: '15px 0' }} />
        <Cart

           productsCart={productsCart}
        />



    </div>
  )
}

export default App;
