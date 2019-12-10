import React, { Component } from 'react'

import './styles.css'

export default class Main extends Component {
    constructor (props) {
        super(props)

        this.state = {
            corInformada: ''
        }
    }

    componentDidMount () {
        this.setState({
            corInformada: this.props.corReal
        })
    }

    componentDidUpdate (prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                corInformada: this.props.corReal
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            corInformada: event.target.value
        })
    }

    handleClick = () => {
        let cor = this.state.corInformada.toLocaleLowerCase()
        if (cor.length === 7 && cor.charAt(0) === '#') {
            let validade = cor.slice(1).split('').every((char) => {
                return (char >= 'a' && char <= 'f') || (char >= '0' && char <= '9')
            })

            if (validade) {
                this.props.changeColor(this.state.corInformada)
            }
        }
    }

    render () {
        return (
            <div className="divEscolha" style={{backgroundColor: this.props.cor}} onDoubleClick={this.props.focoNaCaixa}>
                <div className="inputDiv">
                    <label>{this.props.nome}:</label>
                    <br/>
                    <input type="text" value={this.state.corInformada} onChange={this.handleChange} />
                </div>
                <br/>
                <div className="btnAplicar" onClick={this.handleClick}>Aplicar</div>
            </div>
        )
    }
}