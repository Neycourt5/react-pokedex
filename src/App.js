import { useState } from 'react'
import Pokemondisplay from './components/Pokemondisplay'
import RandomPokemon from './components/RandomPokemon'


const App = () => {
  const BASE_URL = 'pokeapi.co/api';
  const VERSION = 'v2';
  const PROTOCOL = document.location.protocol;
  const API_URL = `${PROTOCOL}//${BASE_URL}/${VERSION}`;

  const [pokemonName, updatePokemonName] = useState()
  const [pokemonImage, updatePokemonImage] = useState()


  const getPokeData = async (id) => {
    const response = await fetch(`${API_URL}/pokemon/${id}`)
    const data = await response.json()
    console.log(data)
    return data
  }

  const callPokeName = async (id) => {
    const pokemon = await getPokeData(id)
    let pokemonName = pokemon.name
    pokemonName = pokemonName.split('')
    pokemonName[0] = pokemonName[0].toUpperCase()
    pokemonName = pokemonName.join('')
    updatePokemonImage(pokemon.sprites.front_default)
    updatePokemonName(pokemonName)

    console.log(pokemon.sprites.front_default)
  }




  return (
    <div className="container">
      <Pokemondisplay
        name={pokemonName}
        image={pokemonImage}
        callPokeName={callPokeName}
      />
    </div>
  );
}

export default App;
