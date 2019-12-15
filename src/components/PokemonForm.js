import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
	state = {
		name: '',
		hp: '',
		frontUrl: '',
		backUrl: '',
	}

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		const pokemonObj = {
			name: event.target.name.value,
			hp: event.target.hp.value,
			frontUrl: event.target.frontUrl.value,
			backUrl: event.target.backUrl.value,
		}
		this.props.addPokemonToCollection(pokemonObj)
	}

	render() {
		return (
			<div>
				<h3>Add a Pokemon!</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths='equal'>
						<Form.Input
							fluid
							label='Name'
							placeholder='Name'
							name='name'
							onChange={this.onChange}
						/>
						<Form.Input
							fluid
							label='hp'
							placeholder='hp'
							name='hp'
							onChange={this.onChange}
						/>
						<Form.Input
							fluid
							label='Front Image URL'
							placeholder='url'
							name='frontUrl'
							onChange={this.onChange}
						/>
						<Form.Input
							fluid
							label='Back Image URL'
							placeholder='url'
							name='backUrl'
							onChange={this.onChange}
						/>
					</Form.Group>
					<Form.Button>Submit</Form.Button>
				</Form>
			</div>
		)
	}
}

export default PokemonForm
