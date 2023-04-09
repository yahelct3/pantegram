import React from 'react'
import './GameComponentt.css'

function GameComponent () {
  const Cell = () => {
    return <td>-</td>
  }

  return (
    <table>
    <tbody>
      <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      </tr>
      <tr>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </tr>
      <tr>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </tr>
    </tbody>
  </table>
  )
}

export default GameComponent