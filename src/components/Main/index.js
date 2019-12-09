import React, { Component } from 'react'

import OpcaoCor from '../OpcaoCor'

import './styles.css'

export default class Main extends Component {

    //clearInterval(refreshIntervalId)

    render () {
        return (
            <div id="main" style={{backgroundColor: this.props.cor}}>
                <OpcaoCor
                    nome='caixa de seleção'
                    corInformada={this.props.caixa.corInformada}
                    handleChange={this.props.caixa.handleChange}
                    changeColor={this.props.caixa.handleClick} />
            </div>
        )
    }
}