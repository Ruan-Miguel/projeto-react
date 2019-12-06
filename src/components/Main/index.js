import React, { Component } from 'react'

import './styles.css'

export default class Main extends Component {
    constructor (props) {
        super(props)

        this.state = {
            cor: 'blueviolet',
            count: 0,
            limit: 10
        }
    }

    handleChange = (event) => {
        this.setState({
            cor: event.target.value
        })
      }

    handleClick = () => {
        this.setState(state => ({
            count: state.count++
        }))
    }

    //clearInterval(refreshIntervalId)

    render () {
        return (
            <div style={{backgroundColor: this.state.cor}} id="main">
                <div id="inputDiv">
                    <label>Escolha uma cor para esse bloco:</label>
                    <br/>
                    <input type="text" value={this.state.cor} onChange={this.handleChange} />
                </div>
                <br/>
                <button className="btnAplicar">Aplicar</button>
            </div>
        )
    }
}