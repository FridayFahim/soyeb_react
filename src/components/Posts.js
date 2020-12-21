import React, { Component } from 'react'
import PostItems from './PostItems'
export default class Posts extends Component {
    constructor(props){
        super(props)
    }
    render() {
       const {posts} = this.props;
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
                        />)} 
                    </div>
                </div>
            </div>
        )
    }
}
