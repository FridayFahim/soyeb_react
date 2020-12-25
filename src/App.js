import {Component} from 'react'
import './App.css';

import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPosts from "./components/AddPosts";


class App extends Component{
   constructor(){
     super()
     this.state = {
       posts:[ {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
      {
        "userId": 1,
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
      },
      {
        "userId": 1,
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
      }],
      data:{
          userId:"",
          title:"",
          body:""
      },
      rmList:[]
     }
   }
    postInput(e){
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}
        })
    }
    addPost(e){
      e.preventDefault()
     this.setState({
       posts:[...this.state.posts,{...this.state.data,id:this.state.posts.length+234}]
     })

    }
    removePost(value){
      this.setState({
        posts:this.state.posts.filter(item => item.id !== value)
      })
    }
    removeSelected(){
      this.state.rmList.forEach(value => {
        this.setState({
          posts:this.state.posts.filter(item => item.id !== value)
        })
      })
     
    }

    removeList(value,e){
      if(e.target.checked){
        this.setState({
          rmList:[...this.state.rmList,value]
        })
      }
      if(e.target.checked === false){
        this.setState({
          rmList:this.state.rmList.filter(item => item !== value)
        })
      }
      
    }
  render(){
    return (
      <div className="App">
          <Header/>
          <Posts 
          posts={this.state.posts}
          removePost={this.removePost.bind(this)}
          removeList={this.removeList.bind(this)}
          removeSelected={this.removeSelected.bind(this)}
          />
          <AddPosts 
          postInput={this.postInput.bind(this)} 
          addPost={this.addPost.bind(this)}
          />
      </div>
    );
  }
}

export default App;
