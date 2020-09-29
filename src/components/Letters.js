import React, { Component } from 'react'
import Letter from './Letter'

class Letters extends Component {

    getLetters() {
        const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        const element = alfabet.map(letter => {
            return <span>{letter.toUpperCase()} </span>
        })
        return element
    }

    render() {

        return (
            <div>
                <div>Simple String</div>
                <p>{this.getLetters()}</p>
                <Letter />
            </div>
        )
    }

}

export default Letters;

rcc
