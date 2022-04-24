import styled from "styled-components";
import {color} from './color'

const variantStyles = {
   1: '24px',
   2: '48px',
   3: '64px',
}



export const StyledButton = styled.button`
   height: ${({ variant }) => variantStyles[variant] ?? variantStyles[1]};
   padding: 5px 15px;
   font-size: 14px;
   background: transparent;
   border-radius: 5px;
   cursor: pointer;
   ${color};
   &:hover {
      background-color: green;
   }

`
