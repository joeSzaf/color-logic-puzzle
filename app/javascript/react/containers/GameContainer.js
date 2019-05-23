import React, { Component } from 'react'

import GameBoard from "../containers/GameBoard"

class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div>
        <div>Color Logic Puzzle</div>
        <GameBoard
          width={4}
          height={4}
          colors={4}
        />
      </div>
    )
  }
}

export default GameContainer
