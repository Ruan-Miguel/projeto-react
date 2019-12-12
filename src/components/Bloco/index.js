import React, { Component } from 'react'

import './styles.css'

export default class Bloco extends Component {
    constructor (props) {
        super(props)

        this.state = {
            corAnterior: null,
        }
    }

    render () {
        return (
            <div style={
                Object.assign(
                    this.props.estilo,
                    {background: this.props.cor}
                )}
            className='bloco'
            onClick={this.props.handleClick} >{this.props.texto}</div>
        )
    }
}