import React , { Component } from 'react'
import Table from './table'

class App extends Component {
  state = {
    characters: [
      {
        Book: 'India Unbound',
        Author: 'Gurcharan Das',
      },
      {
        Book: 'Art of War',
        Author: 'Sun Tzu',
      },
    ],
  }
 render() {
   const { characters } = this.state
   return(
     <div className = "container">
        <Table characterData = {characters} removeCharacter = { this.removeCharacter } />
     </div>
    )
  }
  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character,i) => {
        return i !== index
      }),
    })
  }
}
export default App
