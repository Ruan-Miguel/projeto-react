import React from 'react'

import './styles.css'

import Palheta from '../Palheta'

function containerPalheta(props) {
    return (
        <div className='containerPalheta'>
            <div id='aleatorio' className='btnAplicar'>Aleatório</div>
        <br/>
        <Palheta changeColor={props.changeColor} />
        </div>
    )
}

export default containerPalheta