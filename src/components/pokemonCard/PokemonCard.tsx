import './pokemon-card.css'

import { Pokemon, PokemonTypes } from '../../interfaces/pokemonInterfaces'

export const PokemonCard = (pokemon: Pokemon) => {
  return (
    <div className="poke-card">
      <h3>{pokemon.name.fr}</h3>
      <div className="avatar">
        <img src={pokemon.sprites.regular} alt={`${pokemon.name} avatar`} />
      </div>
      <div className="poke-types">
        {pokemon.types.map((type: PokemonTypes) => (
          <div className="ypes" key={type.name}>
            <p>{type.name}</p>
            <img src={type.image} alt={`${type.name}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
