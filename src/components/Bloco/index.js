import React, { Component } from 'react'
import styled, { keyframes } from "styled-components";

import './styles.css'

export default class Bloco extends Component {
    
    componentWillUpdate (prevProps) {
        if (prevProps.cor !== this.props.cor) {
            const animacao = keyframes`{
                0% {background: radial-gradient(circle, ${prevProps.cor} 0%, ${this.props.cor} 0%)}
                25% {background: radial-gradient(circle, ${prevProps.cor} 25%, ${this.props.cor} 0%)}
                50% {background: radial-gradient(circle, ${prevProps.cor} 50%, ${this.props.cor} 0%)}
                75% {background: radial-gradient(circle, ${prevProps.cor} 75%, ${this.props.cor} 0%)}
                100% {background: radial-gradient(circle, ${prevProps.cor} 100%, ${this.props.cor} 0%)}
            }
            `

            this.Div = styled.div`
            background: ${this.props.cor};
            animation: ${animacao} 200ms forwards;
            `
            
        }
    }

    componentWillMount () {
        this.Div = styled.div`
        background: ${this.props.cor};
        `
    }

    Div = null

    render () {
        return (
            <this.Div style={ this.props.estilo }
            className='bloco'
            onClick={this.props.handleClick} >{this.props.texto}</this.Div>
        )
    }
}