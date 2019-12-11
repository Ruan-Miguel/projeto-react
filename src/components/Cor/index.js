import React from 'react'

import './styles.css'

function Cor (props) {
    return (
        <div className='cor' onClick={() => props.changeColor(props.cor)} style={{backgroundColor: props.cor}}>{props.cor}</div>
    )
}

export default Cor