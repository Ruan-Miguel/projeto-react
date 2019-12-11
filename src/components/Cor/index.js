import React from 'react'

import './styles.css'

function Cor (props) {
    return (
        <div className='cor' style={{backgroundColor: props.cor}}>{props.cor}</div>
    )
}

export default Cor