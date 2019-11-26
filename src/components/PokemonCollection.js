import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.pokemons[0])
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(pokemon => <PokemonCard  pokemon={pokemon}/>)

       }
      </Card.Group>
    )
  }
}

export default PokemonCollection
