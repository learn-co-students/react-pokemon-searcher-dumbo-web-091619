import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      front: '',
      back: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createNewPokemon = this.createNewPokemon.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  
  createNewPokemon(){
    let newPokemon = 
              {
              name: this.state.name,
              stats: [
                {value: this.state.hp, name: 'hp'}],
              sprites: {front: this.state.front, back: this.state.back}
            }
console.log(this.state.hp)
    this.props.addNewPokemon(newPokemon)
  }
  onChange(event){
    const  newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleSubmit(event){
    event.preventDefault()
    this.createNewPokemon()
    
  }




  render() {
    // console.log(this.props)
    return (
      
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.onChange} value={this.state.name} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.onChange} value={this.state.hp} placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange={this.onChange} value={this.state.front} placeholder="url" name="front" />
            <Form.Input fluid label="Back Image URL" onChange={this.onChange} value={this.state.back} placeholder="url" name="back" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
      
    )
  }
}

export default PokemonForm
