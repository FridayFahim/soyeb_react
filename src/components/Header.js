import React, { Component } from 'react'

export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            flexcenter:{
                justifyContent:"center",
                alignItems:"center",
                height:"400px",
                textAlign:'center'
            }
        }
    }

    render() {
        return (
            <div className="header">
                <div style={this.state.flexcenter} className="row">
                    <div className="home-content">
                        <h1>welcome to my blog</h1>
                        <button>check my blogs</button>
                    </div>
                </div>
            </div>
        )
    }
}
