import React, { Component } from 'react'

export default class PostItems extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {id,user,title,body} = this.props
        return (
                <div className="row">
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
                        <button type="button">remove</button>
                    </div>
                </div>
        )
    }
}
