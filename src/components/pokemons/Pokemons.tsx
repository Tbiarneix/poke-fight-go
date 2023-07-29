import './pokemon.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

import { Pokemon } from '../../interfaces/pokemonInterfaces'
import { PokemonCard } from '../pokemonCard/PokemonCard'

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState<any>([])

  const fetchPokemons = async () => {
    try {
      const pokemonUrl = await axios.get(
        'https://api-pokemon-fr.vercel.app/api/v1/pokemon',
      )
      setPokemonList(pokemonUrl.data.slice(1))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div>
      <h2>Pokemons</h2>
      <div className="pokemon-list">
        {pokemonList.map((pokemon: Pokemon) => {
          return (
            <div className="card" key={pokemon.pokedexId}>
              <PokemonCard {...pokemon} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Pokemons
