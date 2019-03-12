import React, { Component } from 'react'

class Input extends Component {
    constructor(){
        super()
        
        
        this.state = {
            userInput: ''
        }
    }

    onChange = (value) => {
        this.setState({
            userInput: value
        })
    }

    render() {
        return (
        <div>
            <input onChange={(e) => this.onChange(e.target.value)}></input>
            <h1>{this.state.userInput}</h1>
        </div>
        )
    }
}

export default Input