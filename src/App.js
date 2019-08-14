import React , { Component } from 'react'
import Table from './table'

class App extends Component {
 render() {
   const characters = [
    {
      Name: 'Jags',
      States_of_usefulness: 'useless',
    },
    {
      Name: 'Jags',
      States_of_usefulness: 'occasionally useful',
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
