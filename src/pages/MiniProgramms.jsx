import React from 'react'
import Navigation from '../components/Navigation';
import Counter from "../components/miniPrograms/Counter";
import ImputText from "../components/miniPrograms/ImputText";
import ImputTextArea from '../components/miniPrograms/ImputTextArea';
import SpeedCut from '../components/miniPrograms/SpeedCut';


const About = () => {
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
         <ImputTextArea />

         <hr style={{ margin: '15px 0' }} />

         <Counter />

         <hr style={{ margin: '15px 0' }} />

         <SpeedCut />

         <hr style={{ margin: '15px 0' }} />

         <ImputText />

         <hr style={{ margin: '15px 0' }} />


         <hr style={{ margin: '15px 0' }} />
      </div>
   );
};

export default About;