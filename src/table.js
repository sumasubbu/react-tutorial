import React , { Component } from 'react'

class Table extends Component {
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>States of usefulness</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jags</td>
            <td>Useless</td>
          </tr>
          <tr>
            <td>Jags</td>
            <td>sometimes Useful</td>
          </tr>
          <tr>
            <td>Jags</td>
            <td>resourceful occasionally</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
