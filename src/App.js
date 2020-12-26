import React,{useState} from 'react'
import './App.css';

import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPosts from "./components/AddPosts";

const App = () => {
  
       const [posts,setPosts] = useState([{
        "userId": 1,
        "id": 1,
        selected:false,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        selected:false,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        selected:false,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        selected:false,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        selected:false,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "userId": 1,
        "id": 6,
        selected:false,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
      {
        "userId": 1,
        "id": 7,
        selected:false,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
      },
      {
        "userId": 1,
        "id": 8,
        selected:false,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
      }])

      const [data,setData] = useState({
        userId:"",
        title:"",
        body:""
    })

    function postInput(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    function addPost(e){
      e.preventDefault()
      setPosts([...posts,{...data,id:posts.length+234}])

    }
    function removePost(value){
      setPosts(posts.filter(item => item.id !== value))
    }
    function removeSelected(){
      setPosts(posts.filter(post => post.selected === false))
    }

    function removeList(value,e){
      if(e.target.checked){
        setPosts(posts.map(item => {
            if(item.id === value){
              item.selected = true
            }
            return item
          })
          )
      }
      if(e.target.checked === false){
        setPosts(posts.map(item => {
            if(item.id === value){
              item.selected = false
            }
            return item
          })
        )
      }
      
    }

    return (
      <div className="App">
          <Header/>
          <Posts 
          posts={posts}
          removePost={removePost}
          removeList={removeList}
          removeSelected={removeSelected}
          />
          <AddPosts 
          postInput={postInput} 
          addPost={addPost}
          />
      </div>
    );

}

export default App;
