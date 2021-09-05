import React from 'react'

const RandomPokemon = ({ callPokeName }) => {
    const getRandomPokemon = () => {
        let randomNumber = Math.floor((Math.random() * 151) + 1)
        console.log(randomNumber)
        callPokeName(randomNumber)
    }

    return (
        <button
            onClick={getRandomPokemon}
        >
            Random Pokemon
        </button>
    )
}

export default RandomPokemon
