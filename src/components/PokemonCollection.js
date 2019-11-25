import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {this.props.pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
