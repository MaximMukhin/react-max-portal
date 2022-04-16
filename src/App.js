import React, { useState } from "react";
import Counter from "./components/Counter";
import ImputText from "./components/ImputText";
/* import PeopleList from "./components/PeopleList"; */
import PostList from "./components/PostList";
/* import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"; */
import './styles/App.css'

function App() {

   const addNewPost = (e) => {
      e.preventDefault()
      setPosts([...posts, {...post, id: Date.now()}])
      setPost({title: '', body: ''})

   }

   const [posts, setPosts] = useState([
      { id: 1, title: 'JavaScript 1', body: 'JS Description 1' },
      { id: 2, title: 'JavaScript 2', body: 'JS Description 2' },
      { id: 3, title: 'JavaScript 3', body: 'JS Description 3' },
   ])

/*    const [peoples, setPeoples] = useState([
      { id: 1, name: 'Max', lastName: 'Mukhin', budget: '60000' },
      { id: 2, name: 'Alex', lastName: 'Serdukova', budget: '40000' },
      { id: 3, name: 'Pasha', lastName: 'Ganushkin', budget: '55000' },
   ]) */

  return (
    <div className="App">
      <Counter />
      <hr />
        <ImputText />
        <hr />
        -------------

        <hr />

        <PostList posts={posts} title='Посты по JS' />


{/*         <PeopleList peoples={peoples} /> */}
    </div>
  );
}

export default App;
