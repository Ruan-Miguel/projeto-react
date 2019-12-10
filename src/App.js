import React, {Component} from 'react';

import './styles.css'

import Header from './components/Header'
import Main from './components/Main'
import OpcaoCor from './components/OpcaoCor'

export default class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            corRealCaixa: '#1976D2',
            corRealHeader: '#76b927',
            corRealCorpo: '#EC407A',
            ComponenteFocado: {
                cor: '',
                alteraCor: null,
            },
        }
    }

    componentWillMount () {
        this.handleClickCorpo()
    }

    mudaCorCaixa = (cor) => {
        this.setState({
            corRealCaixa: cor
        })
    }

    mudaCorHeader = (cor) => {
        this.setState({
            corRealHeader: cor
        })
    }

    mudaCorCorpo = (cor) => {
        this.setState({
            corRealCorpo: cor
        })
    }

    handleClickCaixa = () => {
        this.setState({
            ComponenteFocado: {
                cor: this.state.corRealCaixa,
                alteraCor: this.mudaCorCaixa
            }
        })
    }

    handleClickHeader = () => {
        this.setState({
            ComponenteFocado: {
                cor: this.state.corRealHeader,
                alteraCor: this.mudaCorHeader
            }
        })
    }

    handleClickCorpo = () => {
        this.setState({
            ComponenteFocado: {
                cor: this.state.corRealCorpo,
                alteraCor: this.mudaCorCorpo
            }
        })
    }

    render () {
        return (
            <div id="container">
                <Header cor={this.state.corRealHeader} handleClick={this.handleClickHeader} />
                <Main focoNoCorpo={this.handleClickCorpo}
                        focoNaCaixa={this.handleClickCaixa}

                        cor={this.state.corRealCorpo}
                        corCaixa={this.state.corRealCaixa}

                        hexa={this.state.ComponenteFocado.cor}
                        handleClick={this.state.ComponenteFocado.alteraCor}/>
                    <OpcaoCor
                        cor={this.state.corRealCaixa}
                        focoNaCaixa={this.handleClickCaixa}
                        nome='Caixa de seleção'
                        corReal={this.state.ComponenteFocado.cor}
                        changeColor={this.state.ComponenteFocado.alteraCor} />
            </div> 
        )
    }
}
