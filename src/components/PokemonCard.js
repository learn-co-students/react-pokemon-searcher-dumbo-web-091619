import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
	state = { isClicked: false }

	handleCardClick = event => {
		this.setState({ isClicked: !this.state.isClicked })
	}

	render() {
		const { name, sprites, stats } = this.props.pokemon
		return (
			<Card>
				<div onClick={this.handleCardClick}>
					<div className='image'>
						<img
							alt=''
							src={this.state.isClicked ? sprites.back : sprites.front}
						/>
					</div>
					<div className='content'>
						<div className='header'>{name}</div>
					</div>
					<div className='extra content'>
						<span>
							<i className='icon heartbeat red' />
							{stats.find(elem => elem.name === 'hp').value}
						</span>
					</div>
				</div>
			</Card>
		)
	}
}

export default PokemonCard
