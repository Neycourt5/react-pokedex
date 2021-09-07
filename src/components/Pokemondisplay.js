import React from 'react'
import Button from './Button'

const Pokemondisplay = ({
    name = 'Bulbasaur',
    image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    updateId,
    id,
    pokemonHeight,
    pokemonWeight,
    pokemonType
}) => {

    const getNext = () => {
        updateId(() => id < 151 ? id + 1 : id);
        console.log(id)
    }
    const getPrev = () => {
        updateId(() => id > 1 ? id - 1 : id)
        console.log(id)
    }
    const getRandomPokemon = () => {
        let randomNumber = Math.floor((Math.random() * 151) + 1)
        updateId(() => randomNumber)
        console.log(id)
    }


    return (
        <div className="display">
            <div className="pokedex">
                <div className="pokedex-left-side">
                    <div className="pokemon-image-container">
                        <img src={image} className="pokemon-image" />
                    </div>
                    <div className="row-below-image">
                        <Button
                            className="left-button"
                            changePokemon={getPrev}
                            text='Left'
                        />
                        <Button
                            className="random-button"
                            changePokemon={getRandomPokemon}
                            text='Random Pokemon'
                        />
                        <Button
                            className="right-button"
                            changePokemon={getNext}
                            text='Right'
                        />
                    </div>
                </div>
                <div className="pokedex-right-side">
                    <div className="name-display-container">
                        <h1 className="pokemon-name">{name}</h1>
                    </div>
                    <div className="pokemon-image-container-right">
                        <p>{pokemonHeight}</p>
                        <p>{pokemonWeight}</p>
                        <p>{pokemonType}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemondisplay
