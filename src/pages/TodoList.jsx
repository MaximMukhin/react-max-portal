import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { todosState } from '../atoms/todos'
import Navigation from '../components/Navigation'
import { StyledTodoList } from '../components/styled/StyledTodoList'

const TodoList = () => {

   const [todoItems, setTodoItems] = useRecoilState(todosState)

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/1/todos').then((res) => {
         res.json().then((data) => {
            console.log(data);
            setTodoItems(data)
         })
      })
   }, [setTodoItems])

   /*    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
      }, [setTodoItems]) */

   return (
      <StyledTodoList >
         <Navigation />
         <p>Todo - Component</p>

         <ul>
            {todoItems.map((todoItem) => (
               <li
                  key={todoItem.id}
                  style={{ listStyleType: 'none' }}
               >
                  {
                     `${todoItem.id} - ${todoItem.title} : ${todoItem.completed}`
                  }
               </li>
            ))}
         </ul>





      </StyledTodoList>
   )
}

export default TodoList