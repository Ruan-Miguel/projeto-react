import React, { Component } from 'react'
import styled, { keyframes } from "styled-components";

import './styles.css'

export default class Bloco extends Component {
    
    componentWillUpdate (prevProps) {
        if (prevProps.cor !== this.props.cor) {
            const animacao = keyframes`{
                0% {background: radial-gradient(circle, ${prevProps.cor} 0%, ${this.props.cor} 0%)}
                20% {background: radial-gradient(circle, ${prevProps.cor} 20%, ${this.props.cor} 0%)}
                40 {background: radial-gradient(circle, ${prevProps.cor} 40%, ${this.props.cor} 0%)}
                60% {background: radial-gradient(circle, ${prevProps.cor} 60%, ${this.props.cor} 0%)}
                80% {background: radial-gradient(circle, ${prevProps.cor} 80%, ${this.props.cor} 0%)}
                100% {background: radial-gradient(circle, ${prevProps.cor} 100%, ${this.props.cor} 0%)}
            }
            `

            this.Div = styled.div`
            background: ${this.props.cor};
            animation: ${animacao} 180ms forwards;
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