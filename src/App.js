import React, {Component} from 'react';

import './styles.css'

import Bloco from './components/Bloco'
import ContainerPalheta from './components/ContainerPalheta'
import OpcaoCor from './components/OpcaoCor'

export default class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            corRealCaixa: '#1976D2',
            corRealHeader: '#76b927',
            corRealCorpo: '#CDDC39',
            componenteFocado: {
                cor: '',
                alteraCor: null,
            },
        }
    }

    componentDidMount () {
        this.handleClickCorpo()
    }

    mudaCorCaixa = (cor) => {
        this.setState({
            corRealCaixa: cor,
            componenteFocado: {
                cor: cor,
                alteraCor: this.state.componenteFocado.alteraCor
            }
        })
    }

    mudaCorHeader = (cor) => {
        this.setState({
            corRealHeader: cor,
            componenteFocado: {
                cor: cor,
                alteraCor: this.state.componenteFocado.alteraCor
            }
        })
    }

    mudaCorCorpo = (cor) => {
        this.setState({
            corRealCorpo: cor,
            componenteFocado: {
                cor: cor,
                alteraCor: this.state.componenteFocado.alteraCor
            }
        })
    }

    handleClickCaixa = () => {
        this.setState({
            componenteFocado: {
                cor: this.state.corRealCaixa,
                alteraCor: this.mudaCorCaixa
            }
        })
    }

    handleClickHeader = () => {
        this.setState({
            componenteFocado: {
                cor: this.state.corRealHeader,
                alteraCor: this.mudaCorHeader
            }
        })
    }

    handleClickCorpo = () => {
        this.setState({
            componenteFocado: {
                cor: this.state.corRealCorpo,
                alteraCor: this.mudaCorCorpo
            }
        })
    }

    render () {
        return (
            <div id="container">
                    <Bloco estilo={{
                        height: '10%',
                        width: '100%',
                        top: '0%',
                        zIndex: '1',
                    }}
                    cor={this.state.corRealHeader} 
                    handleClick={this.handleClickHeader}
                    texto='Header' />
                    <Bloco estilo={{
                        height: '90%',
                        width: '100%',
                        top: '10%',
                    }} 
                    cor={this.state.corRealCorpo}
                    handleClick={this.handleClickCorpo} />
                    <Bloco estilo={{
                        height: '30%',
                        width: '30%',
                        top: '35%',
                        left: '35%',
                    }}
                    cor={this.state.corRealCaixa}
                    handleClick={this.handleClickCaixa} />
                    <ContainerPalheta changeColor={this.state.componenteFocado.alteraCor} />
                <OpcaoCor
                    nome='Caixa de seleção'
                    componenteFocado={this.state.componenteFocado} />
            </div> 
        )
    }
}