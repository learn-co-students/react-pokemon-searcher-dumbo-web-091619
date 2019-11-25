import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }
  
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {

    const { height, weight, id, name, abilities, moves, stats, types, sprites } = this.props.pokemon
    
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img alt={name} src={this.state.clicked ? sprites.back : sprites.front} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {(stats.find(e => e.name === 'hp')).value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
