import React, { Component } from 'react'

class ArrayInput extends Component {
    constructor(){
        super()

        this.state = {
            array: ["James", "Billy", "hi", "diggity", "higgity"]
        }
    }

    updateArray(){
        let display = this.state.array.map((value) => <div>{value}</div>)
        return display
    }

    render(){
        return (
        <div>
            <h1>{this.updateArray()}</h1>
        </div>
        )
    }
}

export default ArrayInput