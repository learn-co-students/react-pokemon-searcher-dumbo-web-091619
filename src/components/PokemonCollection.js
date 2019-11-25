import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  constructor(){
    super()

    this.state = {
      pokemons: []
    }
  }

  fetchPokemons = () => {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(r => {
      r.forEach(el => {
        this.setState({
          pokemons: [...this.state.pokemons, el]
        })
      })
    })
  }

  componentDidMount(){
    this.fetchPokemons()
  }



  renderPokes = () => {
    if(this.props.search !== ""){
      const filteredArr = this.state.pokemons.filter(el => (el.name.includes(this.props.search)))
      const transArr = filteredArr.map(el =>
        <PokemonCard poke={el} key={el.id} />
      )

      return transArr
    }
    const transArr = this.state.pokemons.map(el =>
      <PokemonCard poke={el} key={el.id} />
    )
    return transArr
  }

  newPoke = () => {
    if(this.props.newPoke.name !== undefined){
      // debugger
      return (<PokemonCard poke={this.props.newPoke} key={this.props.newPoke.id} />)
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPokes()}
        {this.newPoke()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
