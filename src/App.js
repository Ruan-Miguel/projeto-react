import React, {Component} from 'react';

import './styles.css'

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
                <Main focoNoCorpo={this.handleClickHeader}
                    texto='Header'
                    settings={{
                        backgroundColor: this.state.corRealHeader,
                        height: '10%',
                        width:'100%',
                        top: '0%',
                        zIndex: '1'
                    }} />
                <Main settings={{
                        backgroundColor: this.state.corRealCorpo,
                        height: '90%',
                        width:'100%',
                        top: '10%'
                    }}
                    focoNoCorpo={this.handleClickCorpo} />
                <Main settings={{
                        backgroundColor: this.state.corRealCaixa,
                        height: '30%',
                        width:'30%',
                        top: '35%',
                        left: '35%'
                    }}
                    focoNoCorpo={this.handleClickCaixa} />
                <OpcaoCor
                    nome='Caixa de seleção'
                    corReal={this.state.ComponenteFocado.cor}
                    changeColor={this.state.ComponenteFocado.alteraCor} />
            </div> 
        )
    }
}
