import React, { useState } from "react";
import Counter from "./components/Counter";
import ImputText from "./components/ImputText";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
/* import PeopleList from "./components/PeopleList"; */
import './styles/App.css'

function App() {



   const [posts, setPosts] = useState([
      { id: 1, title: 'dd JavaScript 1', body: '32 JS Description 1' },
      { id: 2, title: 'zz JavaScript 2', body: '1  JS Description 2' },
      { id: 3, title: '2 JavaScript 3', body: '9   JS Description 3' },
   ])

   const [selectedSort, setSelectedSort] = useState('')

   const createPost = (newPost) => {
      console.log(newPost);
      if (newPost.title !== '' && newPost.body !== '') {
         setPosts([...posts, newPost])
      } else {
         console.log('Добавьте текст');
      }
   }

   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
      console.log('removePost', post);
   }


/*    const [peoples, setPeoples] = useState([
      { id: 1, name: 'Max', lastName: 'Mukhin', budget: '60000' },
      { id: 2, name: 'Alex', lastName: 'Serdukova', budget: '40000' },
      { id: 3, name: 'Pasha', lastName: 'Ganushkin', budget: '55000' },
   ]) */

   const sortPosts = (sort) => {
      setSelectedSort(sort)
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
   }

  return (
    <div className="App">
      <Counter />
        <hr style={{ margin: '15px 0' }} />
        <ImputText />
        <hr style={{ margin: '15px 0' }} />



        <PostForm create={createPost} />
        <hr style={{ margin: '15px 0' }} />
        <div>
           <MyInput
              placeholder='Поиск'
           />
           <MySelect
              value={selectedSort}
              onChange={sortPosts}
              defaultValue={'Сортировка'}
              options={[
                 { value: 'title', name: 'По названию' },
                 { value: 'body', name: 'По описанию' }
              ]}

           />
        </div>
        {posts.length !== 0
           ? <PostList remove={removePost} posts={posts} title='Посты по JS' />
           : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
        }



{/*         <PeopleList peoples={peoples} /> */}
    </div>
  );
}

export default App;
