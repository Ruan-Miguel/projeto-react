import React, {Component} from 'react';

import './styles.css'

import Palheta from './components/Palheta'
import OpcaoCor from './components/OpcaoCor'

export default class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            corRealCaixa: '#1976D2',
            corRealHeader: '#76b927',
            corRealCorpo: '#CDDC39',
            ComponenteFocado: {
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
                    <div id='header' className='componente' style={{
                        backgroundColor: this.state.corRealHeader
                    }}
                    onClick={this.handleClickHeader}>Header</div>
                    <div id='corpo' className='componente' style={{
                        backgroundColor: this.state.corRealCorpo
                    }}
                    onClick={this.handleClickCorpo} ></div>
                    <div id='caixa' className='componente' style={{
                        backgroundColor: this.state.corRealCaixa
                    }}
                    onClick={this.handleClickCaixa} ></div>
                    <Palheta changeColor={this.state.ComponenteFocado.alteraCor} />
                <OpcaoCor
                    nome='Caixa de seleção'
                    corReal={this.state.ComponenteFocado.cor}
                    changeColor={this.state.ComponenteFocado.alteraCor} />
            </div> 
        )
    }
}