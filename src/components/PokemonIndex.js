import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: "",
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemons => this.setState({ pokemons: pokemons }))
  }
  
  handleSearch = (value) => {
    this.setState({
      search: value
    })
  }

  addPokemon = (pokemon) => {this.setState({pokemons: [...this.state.pokemons, pokemon]})
  }

  render() {
    const {pokemons, search} = this.state
    console.log(search)
    const renderedPokemon = pokemons.filter(pokemon => pokemon.name.includes(search))

    return (
      <Container>
        <h1>Pokémon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        <br />
        <PokemonCollection pokemons={renderedPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
