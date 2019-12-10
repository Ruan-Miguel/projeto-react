import React, { Component } from 'react'

import './styles.css'

export default class Main extends Component {

    //clearInterval(refreshIntervalId)

    render () {
        return (
            <div id="main" style={{backgroundColor: this.props.cor}} onClick={this.props.focoNoCorpo}>
            </div>
        )
    }
}