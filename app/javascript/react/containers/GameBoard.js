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
    let init_boardstate = []

    for (let y = 0; y < this.props.height; y++){
      let row = []
      for (let x = 0; x < this.props.width; x++){
        row.push(Math.floor(Math.random() * Math.floor(this.props.colors)))
      }
      init_boardstate.push(row)
    }

    this.setState({
      board_state: init_boardstate
    })
  }

  componentDidMount(){
    this.initializeGameBoard()
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
