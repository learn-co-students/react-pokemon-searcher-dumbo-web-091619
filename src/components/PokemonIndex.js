import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    displayPoke: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(data => {
      this.setState({
        pokemon: data,
        displayPoke: data
      })
    })
  }

  addPokemon = (newPokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newPokemon.name,
        stats: [
          {
            "value": newPokemon.hp,
            "name": "hp"
          }
        ],
        sprites: {
          "front": newPokemon.front,
          "back": newPokemon.back
        }
      })
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({
        pokemon: [...this.state.pokemon, data],
        displayPoke: [...this.state.displayPoke, data]
      })
    })
  }

  onChange = (event) => {
    this.filterPokemon(event.target.value)
  }

  filterPokemon = (input) => {
    console.log(input)
    this.setState({
      displayPoke: this.state.pokemon.filter((poke) => poke.name.includes(input))
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection allPokemon={this.state.displayPoke} />
      </Container>
    )
  }
}

export default PokemonPage
