import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super();

    this.state = {
      img: ""
    }
  }

  componentDidMount(){
    this.setState({img: this.props.poke.sprites.front})
  }

  handleClick = () => {
    if(this.state.img === this.props.poke.sprites.front){
      this.setState({img: this.props.poke.sprites.back})
    } else {
      this.setState({img: this.props.poke.sprites.front})
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img alt="oh no!" src={this.state.img} />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
