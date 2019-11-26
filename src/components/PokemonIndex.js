import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchParams: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokeObj => {
      this.setState({
        pokemons: pokeObj
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      searchParams: event.target.value
    }, this.searchPokemons)
  }

  addNewPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  render() {
    const desiredPokemon = this.state.pokemons.filter((pokemon) => {
      return pokemon.name.includes(this.state.searchParams)
    })
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search searchParams={this.state.searchParams} onChange={this.handleChange} />
        <br />
        <PokemonCollection pokemons={desiredPokemon} foundPokemon={this.state.foundPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
