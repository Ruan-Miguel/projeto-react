import React, { Component } from 'react'

import './styles.css'

export default class Main extends Component {
    //clearInterval(refreshIntervalId)

    render () {
        return (
            <div className="divEscolha">
                <div className="inputDiv">
                    <label>Escolha uma cor para a {this.props.nome}:</label>
                    <br/>
                    <input type="text" value={this.props.corInformada} onChange={this.props.handleChange} />
                </div>
                <br/>
                <div className="btnAplicar" onClick={this.props.changeColor}>Aplicar</div>
            </div>
        )
    }
}