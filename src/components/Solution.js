import React, { Component } from 'react'
import Letter from "./Letter"


class Solution extends Component {
    render() {
        const underArray = ['_ ', '_ ', '_ ', '_ ']
        const displayArray = underArray.map(u => {
            return <span>{u}</span>
        })
        return (
            <div>
                {displayArray}
            </div>
        )
    }
}
export default Solution;