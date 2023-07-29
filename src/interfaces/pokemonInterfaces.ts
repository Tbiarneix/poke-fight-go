export interface PokemonNames {
  fr: string
  en: string
  jp: string
}

export interface PokemonSprites {
  regular: string
  shiny: string
}

export interface PokemonTypes {
  name: string
  image: string
}

export interface PokemonResistances {
  name: string
  multiplier: number
}

export interface Pokemon {
  pokedexId: number
  name: PokemonNames
  types: PokemonTypes[]
  sprites: PokemonSprites
  resistances: PokemonResistances[]
}
