import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    term: '' 
  }

  componentDidMount () {
    fetch('http://localhost:3000/pokemon') //eslint-disable-line
      .then(response => response.json())
      .then(pokemons => this.setState({pokemons}))
  }

  saveTerm = (term) => this.setState({ term })
  
  addPokemon = (pokemon) => this.setState({pokemons: [pokemon, ...this.state.pokemons]})
  render() {
    const filterPokemons = this.state.pokemons.filter((pokemon) => 
      pokemon.name.includes(this.state.term)
    )

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={(event) => this.saveTerm(event.target.value)} />
        <br />
        <PokemonCollection pokemons={filterPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
