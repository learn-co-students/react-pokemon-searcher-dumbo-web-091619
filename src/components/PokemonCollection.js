import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    const pokemonCards = this.props.pokemons.map((pokemon) => {
      return(
      <PokemonCard pokemon={pokemon} key={pokemon.id}/>
      )
    })
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonCards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
