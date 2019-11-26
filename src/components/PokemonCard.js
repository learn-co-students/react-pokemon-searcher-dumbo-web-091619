import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

constructor(props) {
  super(props)

  this.state = {
     clicked: false
  }
  this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  this.setState({
    clicked: !this.state.clicked
  })
}



  render() {
    const hp = this.props.pokemon.stats.find(stat => stat.name === 'hp')
    return (
      <Card>
        <div>
          <div onClick={this.handleClick} className="image">
            <img alt="oh no!" src={!this.state.clicked ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: {hp ? hp.value : null}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
