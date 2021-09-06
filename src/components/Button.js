import React from 'react'

const Button = ({ changePokemon, text }) => {


    return (
        <button
            onClick={changePokemon}
        >
            {text}
        </button>
    )
}

export default Button
