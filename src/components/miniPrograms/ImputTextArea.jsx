import { TextField } from "@mui/material";
import React, { useState } from "react";

const ImputTextArea = function () {
   const [valueImputTextAreaAc, setValueImputTextAreaAc] = useState('')
   const [valueImputTextAreaAcNew, setValueImputTextAreaNew] = useState([])

   //   const splitImput = () => {
   //      let str = valueImputTextAreaAc
   //      let arr = str.split('\n')
   //      console.log('splitImput arr', arr);
   //      /*       setValueImputTextAreaNew(arr) */
   //   }

   const splitImput = (string) => {
      let arr = string.split('\n')
      console.log('splitImput arr', arr);
      return arr
/*       setValueImputTextAreaNew(arr) */
   }


   console.log('valueImputTextAreaAc', valueImputTextAreaAc)
   console.log('valueImputTextAreaAcNew', valueImputTextAreaAcNew);

/*    const newArticle = valueImputTextAreaAcNew.map((art, index) => {

      let replaced = art.replace(/\t+/g, '-') //=
         .replace(/\s+/g, '-')  //=
         .replace(/-S-S-/gi, '-S-S') //=
         .replace(/-S-T-/gi, '-S-T') //=
         .replace(/-S-K-/gi, '-S-K') //=
         .replace(/-P-S-/gi, '-P-S') //=
         .replace(/-P-T-/gi, '-P-T') //=
         .replace(/-P-K-/gi, '-P-K') //=
         .replace(/-L-T-/gi, '-L-T') //=
         .replace(/-L-P-/gi, '-L-P') //=
         .replace(/-L-F-/gi, '-L-F') //=
         .replace(/1-D/gi, '1D') //=
         .replace(/2-D/gi, '2D') //=
         .replace(/1-B/gi, '1B') //=
         .replace(/2-B/gi, '2B') //=
         .replace(/1-M/gi, '1M') //=

      console.log('newArt', replaced) //=

      let replaceArt = art

      console.log(replaceArt)

      if (replaced[replaced.length - 1] === '-') {
         return replaced.slice(0, -1) //=
      } else {
         return replaced //=
      }
   }) */

   return (
      <div style={{ textAlign: 'center', fontSize: '20px' }}>

         <p>ImputTextArea AC - Component</p>

         <p>splitImput: {splitImput(valueImputTextAreaAc)}</p>
         <br />
         <p>valueImputTextAreaAc:<br /> {valueImputTextAreaAc}</p>
         <br />
         <p>valueImputTextAreaAcNew:<br /> {valueImputTextAreaAcNew}</p>

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
   );
};
export default ImputTextArea;

/* 

SOFIA	S	K	21	106	1	D	SF027	L
SOFIA	S	K	21	106	1	D	SF027	R
SOFIA	S	K	22	67	1	M	SF027	
SOFIA	S	K	23	53	2	B	SF027	
SOFIA	S	S	20	60	2	B	SF027	
SOFIA	S	S	20	70	2	B	SF027	
SOFIA	S	S	20	80	2	B	SF027	
SOFIA	S	S	20	90	2	B	SF027	
SOFIA	S	S	20	100	2	B	SF027	
SOFIA	S	T	20	60	2	B	SF027	
SOFIA	S	T	20	70	2	B	SF027	
SOFIA	S	T	20	80	2	B	SF027	
SOFIA	S	T	20	90	2	B	SF027	

*/