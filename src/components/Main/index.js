import React, { Component } from 'react'

import OpcaoCor from '../OpcaoCor'

import './styles.css'

export default class Main extends Component {

    //clearInterval(refreshIntervalId)

    render () {
        return (
            <div id="main" style={{backgroundColor: this.props.cor}}>
                <OpcaoCor
                    nome='Caixa de seleção'
                    corReal={this.props.cor}
                    changeColor={this.props.caixa.handleClick} />
                
                <OpcaoCor
                    nome='Corpo'
                    corReal={this.props.corpo.corReal}
                    changeColor={this.props.corpo.handleClick} />

                <OpcaoCor
                    nome='Menu'
                    corReal={this.props.header.corReal}
                    changeColor={this.props.header.handleClick} />
            </div>
        )
    }
}