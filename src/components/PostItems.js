import React, { Component } from 'react'

export default class PostItems extends Component {
    render() {
        const checkedStyle = {
            textDecoration:"line-through",
            color:"red"
        }
        const {id,user,title,body,removePost,removeList,selectedPost} = this.props
        return (
                <div className="row" style={selectedPost?checkedStyle:null}>
                    <div className="id">
                        <input 
                        type="checkbox" 
                        onChange={removeList.bind(this,id)}
                        checked={selectedPost}
                        />
                    </div>
                    <div className="id">
                        <h5>{id}</h5>
                    </div>
                    <div className="user">
                        <h5>user {user}</h5>
                    </div>
                    <div className="title">
                        <h5>{title}</h5>
                    </div>
                    <div className="body">
                        <p>{body}</p>
                    </div>
                    <div className="options">
                        <button 
                        type="button"
                        className="post-btn"
                        onClick={removePost.bind(this,id)}
                        >remove</button>
                    </div>
                </div>
        )
    }
}
