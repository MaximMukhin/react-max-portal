import React, { useState } from "react";


const ImputText = function () {
   const [value, setValue] = useState('text')

   return (
      <div>
      <h1>{value.toUpperCase()}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      </div>

   )

}

export default ImputText;