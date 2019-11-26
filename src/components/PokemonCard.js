import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  handleClick = () => {
    this.setState({
      front: !this.state.front
    })
  }
  render() {
    const thisPokemon = this.props.pokemon
    const thisHP = thisPokemon.stats.find((stat) => {
      return stat.name === "hp"
    }).value
    
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.front ? thisPokemon.sprites.front : thisPokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{thisPokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {thisHP}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
