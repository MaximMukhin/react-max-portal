import React, { useEffect } from "react";
/* import Counter from "./components/Counter";
import ImputText from "./components/ImputText"; */
import './styles/App.css'
import CatalogList from "./components/CatalogList";
import Cart from "./components/Cart";
import { useRecoilState } from "recoil";
import { productsState } from "./atoms/products";

function App() {

const [products, setProducts] = useRecoilState(productsState)
   
   useEffect(() => {
      fetch('http://localhost:3000/products.json').then((res) => {
         res.json().then((data) => {
            console.log(data);
            setProducts(data)
         })
      })
   },[])

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
        />

        <hr style={{ margin: '15px 0' }} />
           <Cart />

    </div>
  )
}

export default App;
