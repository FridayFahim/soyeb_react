import React, { Component } from 'react'
import PostItems from './PostItems'
export default class Posts extends Component {

    render() {
       const {posts,removePost,removeList,removeSelected} = this.props;
        return (
            <div className="posts">
                <h1>Posts</h1>
                <div className="row center-align-h">
                    <div className="container">
                        {posts.map((data) => <PostItems
                            key={data.id}
                            id={data.id}
                            user={data.userId}
                            title={data.title}
                            body={data.body}
                            selectedPost={data.selected}
                            removePost={removePost.bind(this)}
                            removeList={removeList.bind(this)}
                        />)} 

                        <button
                         className="post-btn"
                         onClick={removeSelected.bind(this)}
                         >remove selected</button>
                    </div>
                </div>
            </div>
        )
    }
}
