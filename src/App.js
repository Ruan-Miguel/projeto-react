import React, {Component} from 'react';

import './styles.css'

import Header from './components/Header'
import Main from './components/Main'

export default class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            corRealCaixa: '#1976D2',
            corInformadaCaixa: '',
            corRealHeader: '#76b927',
            corInformadaHeader: ''
        }
    }

    componentDidMount () {
        this.setState({
            corInformadaCaixa: this.state.corRealCaixa,
        })
    }

    handleChangeCaixa = (event) => {
        this.setState({
            corInformadaCaixa: event.target.value
        })
    }

    handleClickCaixa = () => {
        let cor = this.state.corInformadaCaixa
        cor = cor.toLocaleLowerCase()
        if (cor.length === 7 && cor.charAt(0) === '#') {
            let validade = cor.slice(1).split('').every((char) => {
                return (char >= 'a' && char <= 'f') || (char >= '0' && char <= '9')
            })

            if (validade) {
                this.setState({
                    corRealCaixa: this.state.corInformadaCaixa,
                })
            }
        }
    }

    render () {
        return (
            <div id="container">
                <Header corReal={this.state.corRealHeader} />
                <div id="subcontainer">
                    <Main cor={this.state.corRealCaixa}
                    caixa={{
                        corInformada: this.state.corInformadaCaixa,
                        handleChange: this.handleChangeCaixa,
                        handleClick: this.handleClickCaixa
                    }}
                    
                    header={{
                        corInformada: this
                    }} />
                </div>
            </div> 
        )
    }
}
