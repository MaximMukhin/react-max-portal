import { TextField } from "@mui/material";
import React, { useState } from "react";


const ImputTextArea = function () {
   const [valueImputTextAreaAc, setValueImputTextAreaAc] = useState('')
   const [valueImputTextAreaAcNew, setValueImputTextAreaNew] = useState([])
   console.log('valueImputTextAreaAc', valueImputTextAreaAc);
   /*    const toReplaced = (str) => {
         let replaced = str.replace(/\s+/g, '-')
            .replace(/-S-S-/gi, '-S-S')
            .replace(/-S-T-/gi, '-S-T')
            .replace(/-S-K-/gi, '-S-K')
            .replace(/-P-S-/gi, '-P-S')
            .replace(/-P-T-/gi, '-P-T')
            .replace(/-P-K-/gi, '-P-K')
            .replace(/-L-T-/gi, '-L-T')
            .replace(/-L-P-/gi, '-L-P')
            .replace(/-L-F-/gi, '-L-F')
            .replace(/1-D/gi, '1D')
            .replace(/2-D/gi, '2D')
            .replace(/1-B/gi, '1B')
            .replace(/2-B/gi, '2B')
            .replace(/1-M/gi, '1M')
   
         if (replaced[replaced.length - 1] === '-') {
            return replaced.slice(0, -1) //
         } else {
            return replaced; //
         }
      } */

   const splitImput = () => {
      let str = valueImputTextAreaAc
      let arr = str.split('\n')
      console.log('splitImput run', arr)
      console.log(arr.length);
      for (let i = 0; i < arr.length; i++) {

         console.log(arr[i]);

         let replaced = arr[i].replace(/\s+/g, '-')
            .replace(/-S-S-/gi, '-S-S')
            .replace(/-S-T-/gi, '-S-T')
            .replace(/-S-K-/gi, '-S-K')
            .replace(/-P-S-/gi, '-P-S')
            .replace(/-P-T-/gi, '-P-T')
            .replace(/-P-K-/gi, '-P-K')
            .replace(/-L-T-/gi, '-L-T')
            .replace(/-L-P-/gi, '-L-P')
            .replace(/-L-F-/gi, '-L-F')
            .replace(/1-D/gi, '1D')
            .replace(/2-D/gi, '2D')
            .replace(/1-B/gi, '1B')
            .replace(/2-B/gi, '2B')
            .replace(/1-M/gi, '1M')

         if (replaced[replaced.length - 1] === '-') {
            return console.log(replaced.slice(0, -1))

         } else {
            return console.log(replaced);
         }
      }

   }

   return (
      <div style={{ textAlign: 'center' }}>
         <h3>ImputTextArea AC - Component</h3>
         <br />


         <br />
         <p>splitImput: {splitImput()}</p>
         <br />
         <h1>Value: {valueImputTextAreaAc.toUpperCase()}</h1>

         <TextField
            style={{ marginTop: '15px' }}
            sx={{ width: '400px' }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="info"
            size="small"
            multiline
            value={valueImputTextAreaAc}
            onChange={event => setValueImputTextAreaAc(event.target.value)}
         />

      </div>
   )
}

export default ImputTextArea;