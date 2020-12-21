import React, { Component } from 'react'

export default class AddPosts extends Component {
    constructor(props){
        super(props)
        this.state ={
           
        }
    }
   
    

    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text" 
                    name="userId" 
                    onChange={this.props.postInput.bind(this)}
                    />
                    <input 
                    type="text" 
                    name="title" 
                    onChange={this.props.postInput.bind(this)}
                    />
                    <textarea 
                    name="body" 
                    onChange={this.props.postInput.bind(this)}
                    ></textarea>
                    <input 
                    type="submit" 
                    onClick={this.props.addPost.bind(this)} 
                    value="add post"
                    />
                </form>
            </div>
        )
    }
}
