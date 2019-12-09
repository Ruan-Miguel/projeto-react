import React, {Component} from 'react'

import './styles.css'

export default class Header extends Component {
    render () {
        return (
            <header style={{backgroundColor: this.props.corReal}}>
                <h1>Jogo de cores</h1>
            </header>
        )
    }
}