import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      search: "",
      newPoke: {}
    }
  }

  indicate = (poke) => {
    this.setState({
      newPoke: poke
    })
  }

  handleSearch = (text) => {
    this.setState({search: text.currentTarget.value})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm indicate={this.indicate}/>
        <br />
        <Search onChange={(text) => this.handleSearch(text)} />
        <br />
        <PokemonCollection search={this.state.search} newPoke={this.state.newPoke}/>
      </Container>
    )
  }
}

export default PokemonPage
