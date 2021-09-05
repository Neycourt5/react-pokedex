import React from 'react'

const Pokemondisplay = ({ name = 'Bulbasaur', image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }) => {
    return (
        <div className="display">
            <div className="pokedex-left-side">
                <div className="pokemon-image-container">
                    <img src={image} className="pokemon-image" />
                </div>
                <div className="name-display-container">
                    <h1 className="pokemon-name">{name}</h1>
                </div>
            </div>
            <div className="pokedex-right-side">

            </div>
        </div>
    )
}

export default Pokemondisplay
