import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const InputTextArea = function () {
   const [valueInputTextAreaAc, setValueInputTextAreaAc] = useState('')
   const [valueInputTextAreaAcNew, setValueInputTextAreaNew] = useState([])

   const splitInput = (string) => {
      let arr = string.split('\n')
      console.log('splitInput arr', arr);
      return arr
   }

   useEffect(() => {
      setValueInputTextAreaNew(splitInput(valueInputTextAreaAc))
   }, [valueInputTextAreaAc])

   console.log('valueInputTextAreaAc', valueInputTextAreaAc)
   console.log('valueInputTextAreaAcNew', valueInputTextAreaAcNew);

   const newArticle = splitInput(valueInputTextAreaAc).map((art) => {

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

      if (replaced[replaced.length - 1] === '-') {
         return replaced.slice(0, -1) //=
      } else {
         return replaced //=
      }
   })

   console.log('newArticle', newArticle)

   return (
      <div style={{ textAlign: 'center' }}>
         <br />
         <h3>InputTextArea AC - Component</h3>
         <br />
         <ul>
            <h3>Полученные Артикулы</h3>
            {newArticle.map((item, index) => (
               <li style={{ listStyleType: 'none' }} key={index}>{item}</li>
            ))}
         </ul>
         {/*          <br />
         <p>splitInput: <br /> {splitInput(valueInputTextAreaAc)}</p>
         <br />
         <p>valueInputTextAreaAc:<br /> {valueInputTextAreaAc}</p>
         <br />
         <p>valueInputTextAreaAcNew:<br /> {valueInputTextAreaAcNew}</p>
         <br /> */}

         <TextField
            style={{ marginTop: '15px' }}
            sx={{ width: '400px' }}
            id="outlined-basic"
            label="Артикулы"
            variant="outlined"
            color="info"
            size="small"
            multiline
            value={valueInputTextAreaAc}
            onChange={event => setValueInputTextAreaAc(event.target.value)}
         />

      </div>
   );
};
export default InputTextArea;

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