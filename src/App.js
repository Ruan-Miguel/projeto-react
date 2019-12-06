import React from 'react';

import './styles.css'

import Header from './components/Header'
import Main from './components/Main'

function App() {
    return (
        <div id="container">
            <Header />
            <div id="subcontainer">
                <Main />
            </div>
        </div> 
    )
}

export default App;
