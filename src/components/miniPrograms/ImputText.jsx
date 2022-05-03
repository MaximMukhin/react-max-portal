import { TextField } from "@mui/material";
import React, { useState } from "react";


const ImputText = function () {
   const [valueImputText, setValueImputText] = useState('')

   return (
      <div style={{ textAlign: 'center' }}>
         <h3>ImputText - Component</h3>
         <br />
         <h1>Value UpperCase: {valueImputText.toUpperCase()}</h1>

         <TextField
            style={{ marginTop: '15px' }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="info"
            size="small"
            value={valueImputText}
            onChange={event => setValueImputText(event.target.value)}
         />

      </div>
   )
}

export default ImputText;