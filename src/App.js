import React , { Component } from 'react'
import Table from './table'

class App extends Component {
 render() {
   const characters = [
    {
      Book: 'India Unbound',
      Author: 'Gurcharan Das',
    },
    {
      Book: 'Art of War',
      Author: 'Sun Tzu',
    },
   ]

   return(
     <div className = "container">
        <Table characterData = {characters} />
     </div>
    )
  }
}
export default App
