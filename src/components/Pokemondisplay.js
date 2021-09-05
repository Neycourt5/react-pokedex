import React from 'react'
import RandomPokemon from './RandomPokemon'

const Pokemondisplay = ({ name = 'Bulbasaur', image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', callPokeName }) => {
    return (
        <div className="display">
            <div className="pokedex">
                <div className="pokedex-left-side">
                    <div className="pokemon-image-container">
                        <img src={image} className="pokemon-image" />
                    </div>
                    <div className="name-display-container">
                        <h1 className="pokemon-name">{name}</h1>
                    </div>
                    <div className="row-below-image">
                        <button className="left-button">Left</button>
                        <RandomPokemon callPokeName={callPokeName} />
                        <button className="right-button">Right</button>
                    </div>
                </div>

                <div className="pokedex-right-side">

                </div>
            </div>
        </div>
    )
}

export default Pokemondisplay
