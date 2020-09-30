import React, { Component } from 'react'
import Letter from './Letter'

class Letters extends Component {

    render() {

        return (
            <div>
                <div>Available Letters</div>
                {Object.keys(this.props.letterStatus).map(letter => {
                    if (this.props.letterStatus[letter]) {
                        return <Letter letter={letter} class="selected" />
                    }
                    return <Letter letter={letter} />
                })}
            </div>
        )
    }
}

export default Letters;
