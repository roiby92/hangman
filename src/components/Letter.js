import React, { Component } from 'react'

class Letter extends Component {

    render() {
        return <span className={this.props.class? this.props.class : ''}> {this.props.letter}</span>
    }
}

export default Letter;