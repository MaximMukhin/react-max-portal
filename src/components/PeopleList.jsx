import React from 'react'
import PeopleItem from './PeopleItem';

const PeopleList = ({peoples}) => {

   return (
      <div>
         <h2 style={{ textAlign: 'center' }}>Список людишек</h2>
         {peoples.map((people) => 
            <PeopleItem people={people} key={people.id} />
            )}
      </div>
   )
}

export default PeopleList;