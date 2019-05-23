import React, { Component } from 'react'

import GameTile from "../components/GameTile"

class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div>
        Hello from game board!!
        <GameTile />
      </div>
    )
  }
}

export default GameBoard
