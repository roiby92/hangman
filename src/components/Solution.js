import React, { Component } from 'react'
import Letter from "./Letter"

class Solution extends Component {



    render() {
        const wordArray = this.props.solution.word.toUpperCase().split('')
        return (
            <div>
                {wordArray.map((letter) => {
                    if (this.props.letterStatus[letter]) {
                        if (letter === wordArray[0]) {
                            return <Letter letter={letter} />
                        }
                        return <Letter letter={letter.toLowerCase()} />
                    }
                    return <Letter letter={"_"} />
                }
                )}
                <div>{this.props.solution.hint}</div>
            </div>
        )
    }
}
export default Solution;