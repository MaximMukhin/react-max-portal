import React, {  } from "react";
import Counter from "./components/Counter";
import ImputText from "./components/ImputText";
import './styles/App.css'


function App() {

  return (
    <div className="App">
      <Counter />
      <hr />
        <ImputText />
        <hr />

        <div className="post">
           <div className="post__content">
              <strong>1. JavaScript</strong>
              <div>
                 JavaScript - язык програмированя
              </div>
           </div>
           <div className="post__btns">
              <button>Удалить</button>
           </div>
        </div>
    </div>
  );
}

export default App;
