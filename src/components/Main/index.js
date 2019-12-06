import React, { Component } from 'react'

import './styles.css'

export default class Main extends Component {
    constructor (props) {
        super(props)

        this.state = {
            cor: 'snow',
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
            <div id="main">
                <label>Escolha uma cor:</label>
                <br/>
                <input type="text" value={this.state.cor} onChange={this.handleChange} />
                <br/>
                <button>Aplicar</button>
            </div>
        )
    }
}