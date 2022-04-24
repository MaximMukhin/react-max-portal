import React, { useState } from "react";
import { StyledButton } from "./styled/StyledButton";

const Counter = function () {
   const [count, setCount] = useState(0)

   function increment() {
      setCount(count + 1)
   }

   function decrement() {
      setCount(count - 1)
   }

   return (
      <div>
         <StyledButton 
         variant={count}

         >
            Кнопка
         </StyledButton>
         <h1>{count}</h1>
         <StyledButton onClick={increment}>Increment</StyledButton>
         <StyledButton onClick={decrement}>Decrement</StyledButton>
      </div>
   )

}

export default Counter;