import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import uuid from 'uuid'

export default function PokemonCollection(props) {
	const renderPokes = props.pokemons.map(poke => {
		return <PokemonCard pokemon={poke} key={poke.id} />
	})
	return <Card.Group itemsPerRow={6}>{renderPokes}</Card.Group>
}
