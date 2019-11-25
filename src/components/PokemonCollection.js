import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    const transformedArray = this.props.allPokemon.map((digimon) => 
      <PokemonCard key={digimon.id} pokemon={digimon} />)

    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {transformedArray}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
