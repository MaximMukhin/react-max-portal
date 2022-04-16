import React from 'react'

const PeopleItem = (props) => {

   return (
      <div className="post">
         <div className="post__content">
            <strong>Имя: {props.people.name}
               <br />
               Фамилия: {props.people.lastName}</strong>
            <div>
               Бюджет: {props.people.budget}
            </div>
         </div>
         <div className="post__btns">
            <button>Удалить</button>
         </div>
      </div>
   )
}

export default PeopleItem;