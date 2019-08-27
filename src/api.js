import React, { Component } from 'react'
class App extends Component {
 state = {
   data : [],
 }

  componentDidMount() {
    
    const url = 'https://dev-ae-b365-teams-fa.azurewebsites.net/api/SearchEmailFunction'

    fetch(url, {
      "method": "POST",
      "body": JSON.stringify({
        "email": "alice@dreamteam.net.au"
      })
    }).then(result => result.json()).then(result => {
      console.log(result);
      this.setState({
        data:result,
      })
    })

  }

  render(){
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <li key = {index}>{entry}</li>
    })

    return <ul>{ result }</ul>
    }
}

export default App
