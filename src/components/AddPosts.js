import React, { Component } from 'react'

export default class AddPosts extends Component {
    constructor(props){
        super(props)
        this.state ={
           
        }
    }

    render() {
        return (
            <div className="addpost">
                <div className="row center-align-h">   
                     <div className="container">
                        <form>
                            <input 
                            type="text" 
                            name="userId" 
                            className="form"
                            placeholder="username"
                            onChange={this.props.postInput.bind(this)}
                            />
                            <input 
                            type="text" 
                            name="title" 
                            placeholder="title"
                            className="form"
                            onChange={this.props.postInput.bind(this)}
                            />
                            <textarea 
                            name="body" 
                            placeholder="write here..."
                            className="form"
                            onChange={this.props.postInput.bind(this)}
                            ></textarea>
                            <input 
                            type="submit" 
                            onClick={this.props.addPost.bind(this)} 
                            value="add post"
                            className="post-btn"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
