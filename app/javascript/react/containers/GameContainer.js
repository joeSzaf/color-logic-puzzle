import React, { Component } from 'react'

import GameBoard from "../containers/GameBoard"

class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board_state: []
    }
  }

  render(){
    return(
      <div>
        <div>Hello!</div>
        <GameBoard />
      </div>
    )
  }
}

export default GameContainer
