import './pokemon.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

import { Pokemon } from '../../interfaces/pokemonInterfaces'
import { PokemonCard } from '../pokemonCard/PokemonCard'

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>(pokemonList)

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

  const handleFilterChange = (e: any) => {
    const filterKeyword = e.target.value.toLowerCase()
    const filteredList = pokemonList.filter((pokemon) =>
      pokemon.name.fr.toLowerCase().includes(filterKeyword),
    )
    setFilteredPokemonList(filteredList)
  }

  return (
    <div>
      <h2>Pokemon</h2>
      <div className="find-pokemon">
        <h3>Find a Pokemon</h3>
        <input type="text" placeholder="Search a pokemon" onChange={handleFilterChange} />
      </div>
      <div className="pokemon-list">
        {filteredPokemonList
          ? filteredPokemonList.map((pokemon: Pokemon) => {
              return (
                <div className="card" key={pokemon.pokedexId}>
                  <PokemonCard {...pokemon} />
                </div>
              )
            })
          : pokemonList.map((pokemon: Pokemon) => {
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
