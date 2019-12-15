import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
	state = {
		pokemonCollection: [],
		searchPhrase: '',
	}

	componentDidMount() {
		fetch('http://localhost:3000/pokemon')
			.then(response => response.json())
			.then(response => {
				this.setState({ pokemonCollection: response })
			})
	}

	addPokemonToCollection = pokemonObj => {
		console.log(pokemonObj)
		fetch('http://localhost:3000/pokemon', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: pokemonObj.name,
				stats: [
					{
						value: pokemonObj.hp,
						name: 'hp',
					},
				],
				sprites: {
					front: pokemonObj.frontUrl,
					back: pokemonObj.backUrl,
				},
			}),
		})
			.then(response => response.json())
			.then(response => {
				this.setState({
					pokemonCollection: [...this.state.pokemonCollection, response],
				})
			})
	}

	handleSearch = event => {
		this.setState({
			searchPhrase: event.target.value,
		})
	}

	renderPokemon = () => {
		return this.state.pokemonCollection.filter(poke => {
			return poke.name.includes(this.state.searchPhrase)
		})
	}

	render() {
		return (
			<Container>
				<h1>Pokemon Searcher</h1>
				<br />
				<PokemonForm addPokemonToCollection={this.addPokemonToCollection} />
				<br />
				<Search handleSearch={this.handleSearch} />
				<br />
				<PokemonCollection pokemons={this.renderPokemon()} />
			</Container>
		)
	}
}

export default PokemonPage
