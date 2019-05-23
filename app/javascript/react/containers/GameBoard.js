import React, { Component } from 'react'

import GameTile from "../components/GameTile"

class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board_state: []
    }
    this.initializeGameBoard = this.initializeGameBoard.bind(this)
  }

  initializeGameBoard() {
    let init_board_state = []

    for (let y = 0; y < this.props.height; y++){
      let row = []
      for (let x = 0; x < this.props.width; x++){
        row.push(Math.floor(Math.random() * Math.floor(this.props.colors)))
      }
      init_board_state.push(row)
    }

    this.setState({
      board_state: init_board_state
    })
  }

  componentDidMount(){
    this.initializeGameBoard()
  }


  render(){
    let board = []

    this.state.board_state.forEach(row => {
      let current_row = []
      row.forEach(space => {
        current_row.push(
          <GameTile
            color={space}
          />
        )
      })
      board.push(<div className="row">{current_row}</div>)
    })

    return(
      <div className="game-board">
        {board}
      </div>
    )
  }
}

export default GameBoard
