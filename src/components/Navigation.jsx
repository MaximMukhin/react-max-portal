import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Navigation = () => {
   return (
      <div style={{
         textAlign: 'center',
         fontSize: '20px',
         fontWeight: '900',
         marginBottom: '20px',
         marginTop: '20px'
      }}>

         <Link to="/main">
            <Button
               size="large"
            >
               Главная
            </Button>
         </Link>

         <Link to="/">
            <Button
               size="large"
            >
               Каталог
            </Button>
         </Link>

         <Link to="/cart">
            <Button
               size="large"
            >
               Корзина
            </Button>
         </Link>

         <Link to="/miniProgramms">
            <Button
               size="large"
            >
               Mini-Programms
            </Button>
         </Link>

         <Link to="/test">
            <Button
               size="large"
            >
               Test
            </Button>
         </Link>
      </div>
   )
}

export default Navigation