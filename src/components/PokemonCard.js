import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showFront: true,
  }

  toggleSprite = () => {
    this.setState({
      showFront: !this.state.showFront
    })
  }

  render() {
    const {name, sprites}=this.props.pokemon
    const {hp}=this.props.pokemon.stats
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleSprite} >
            <img src={(this.state.showFront ? sprites.front : sprites.back)} alt={name}/>
          </div>
          <div className="content">
            <div className="header"><strong>{name}</strong></div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard