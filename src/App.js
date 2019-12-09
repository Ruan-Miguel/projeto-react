import React, {Component} from 'react';

import './styles.css'

import Header from './components/Header'
import Main from './components/Main'

export default class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            corRealCaixa: '#1976D2',
            corRealHeader: '#76b927',
            corRealCorpo: '#fffafa'
        }
    }

    handleClickCaixa = (cor) => {
        this.setState({
            corRealCaixa: cor
        })
    }

    handleClickHeader = (cor) => {
        this.setState({
            corRealHeader: cor
        })
    }

    handleClickCorpo = (cor) => {
        this.setState({
            corRealCorpo: cor
        })
    }

    render () {
        return (
            <div id="container">
                <Header corReal={this.state.corRealHeader} />
                <div style={{backgroundColor: this.state.corRealCorpo}} id="subcontainer">
                    <Main cor={this.state.corRealCaixa}

                        corpo={{
                            corReal: this.state.corRealCorpo,
                            handleClick: this.handleClickCorpo
                        }}

                        caixa={{
                            handleClick: this.handleClickCaixa
                        }}
                        
                        header={{
                            corReal: this.state.corRealHeader,
                            handleClick: this.handleClickHeader
                        }} />
                </div>
            </div> 
        )
    }
}
