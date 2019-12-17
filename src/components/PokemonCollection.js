import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    const renderPokemons = this.props.pokemons.map(pokemon => 
      <PokemonCard pokemon={pokemon} key={pokemon.id} />)


    return (
      <Card.Group itemsPerRow={6}>
        {renderPokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection
