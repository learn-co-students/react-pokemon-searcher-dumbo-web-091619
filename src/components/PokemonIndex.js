import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import axios from 'axios'

class PokemonPage extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       pokemons: [],
       searchItem: ''
    }
    this.addNewPokemon = this.addNewPokemon.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  

  componentDidMount(){
    axios.get('http://localhost:3000/pokemon')
    .then(r =>{
      this.setState({
        pokemons: r.data
      })
    })
  }

  addNewPokemon(pokemon){
    axios.post('http://localhost:3000/pokemon', pokemon)

    console.log(pokemon)

    this.setState({
      pokemons: [pokemon, ...this.state.pokemons]
    })
  }

  handleSearch(event){
    this.setState({
      searchItem: event.target.value
    })
  }
  
  
  
  render() {
    let filteredPokemons = this.state.pokemons.filter( pokemon =>  pokemon.name.includes(this.state.searchItem))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={filteredPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
