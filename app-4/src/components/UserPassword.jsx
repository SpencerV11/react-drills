import React, { Component } from 'react'

class UserPassword extends Component {
    constructor(){
        super()

        this.state = {
            userInput1: '',
            userInput2: ''
        }

    }
    handleClick = () => {
        alert(`USERNAME: ${this.state.userInput1} PASSWORD: ${this.state.userInput2}`)
    }

    onChange(val){
        this.setState({
            userInput1: val
        })
    }
    onChange2(val2){
        this.setState({
            userInput2: val2
        })
    }

    render(){
        return (
            <div>
                <input onChange={(e) => this.onChange(e.target.value)}placeholder="Username"></input>
                <input onChange={(e) => this.onChange2(e.target.value)}placeholder="Password"></input>
                <button onClick={() =>this.handleClick()}>Submit</button>
            </div>
        )
    }
}

export default UserPassword