import React from 'react'
import Navigation from '../components/Navigation';
import Counter from "../components/miniPrograms/Counter";
import InputText from "../components/miniPrograms/InputText";
import InputTextAreaAc from '../components/miniPrograms/InputTextAreaAc';
import SpeedCut from '../components/miniPrograms/SpeedCut';


const MiniProgramms = () => {
   return (
      <div>
         <Navigation />
         <h1 style={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '900'
         }}>
            Компонент Mini-Programs
         </h1>
         <InputTextAreaAc /> 

         <hr style={{ margin: '15px 0' }} />

         <Counter />

         <hr style={{ margin: '15px 0' }} />

         <SpeedCut />

         <hr style={{ margin: '15px 0' }} />

         <InputText />

         <hr style={{ margin: '15px 0' }} />


         <hr style={{ margin: '15px 0' }} />
      </div>
   );
};

export default MiniProgramms;