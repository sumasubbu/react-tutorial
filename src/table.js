import React , { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Book</th>
        <th>Author</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row,index) => {
    return (
      <tr key ={index}>
        <td>{row.Book}</td>
        <td>{row.Author}</td>
      </tr>

    )
  }

  )

  return <tbody>{rows}</tbody>

}

class Table extends Component {
  render() {
    const { characterData } = this.props

    return (
      <table>
        <TableHeader/>
        <TableBody characterData = {characterData} />
      </table>
    )
  }
}

export default Table
