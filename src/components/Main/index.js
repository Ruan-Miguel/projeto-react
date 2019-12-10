import React, { Component } from 'react'

import './styles.css'

export default class Main extends Component {

    //clearInterval(refreshIntervalId)

    render () {
        return (
            <div id="main" style={this.props.settings}
                onClick={this.props.focoNoCorpo}>
                {this.props.texto}
            </div>
        )
    }
}