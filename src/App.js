import React, { Component } from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

export class App extends Component {
 
  componentDidMount(){
    fetch('')
  }

  render() {
    return (
      <div className="App">
        <PokemonIndex />
      </div>
    )
  }
}

export default App
