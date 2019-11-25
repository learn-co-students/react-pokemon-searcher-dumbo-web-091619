import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      stats: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (e) => {
    // debugger
    this.setState({
      name: e.currentTarget.name.value,
      stats: ["1","2","3","4","5", {value: e.currentTarget.hp.value}],
      sprites: {front: e.currentTarget.frontUrl.value, back: e.currentTarget.backUrl.value}
    }, function(){
      fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }, body: JSON.stringify(this.state)
      })
      .then(r => r.json())
      .then(r => {
        this.props.indicate(r)
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
