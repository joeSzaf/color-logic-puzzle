import React, { Component } from 'react'

import GameTile from "../components/GameTile"
import VictoryModal from "../containers/VictoryModal"

class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board_state: [],
      game_status: false,
      victory_modal_show: false,
      moves: 0
    }
    this.initializeGameBoard = this.initializeGameBoard.bind(this)
    this.updateSpace = this.updateSpace.bind(this)
    this.updateBoard = this.updateBoard.bind(this)
    this.handleSpaceClick = this.handleSpaceClick.bind(this)
    this.checkNeighbors = this.checkNeighbors.bind(this)
    this.checkGameComplete = this.checkGameComplete.bind(this)
    this.hideModal = this.hideModal.bind(this)
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
      board_state: init_board_state,
      game_status: true,
      moves: 0
    })
  }

  checkNeighbors(current_space, board_state, current_color){
    let x = current_space[0]
    let y = current_space[1]

    let matched_neighbors = []

    // check top neighbor
    if (y > 0){
      if (board_state[y-1][x] === current_color){
        matched_neighbors.push([x, y-1])
      }
    }

    // check bottom neighbor
    if (y < this.props.height -1){
      if (board_state[y+1][x] === current_color){
        matched_neighbors.push([x, y+1])
      }
    }

    // check right neighbor
    if (x < this.props.width -1){
      if (board_state[y][x+1] === current_color){
        matched_neighbors.push([x+1, y])
      }
    }

    // check left neighbor
    if (x > 0){
      if (board_state[y][x-1] === current_color){
        matched_neighbors.push([x-1, y])
      }
    }

    return matched_neighbors
  }

  checkGameComplete(board){
    let allMatch = true
    let initialSquareColor = board[0][0]
    board.forEach(row => {
      row.forEach(space => {
        if (space !== initialSquareColor) {
          allMatch = false
        }
      })
    })
    if (allMatch) {
      this.setState({
        game_status: false,
        victory_modal_show: true
      })
    }
  }

  updateSpace(coordinates,board,c){
    let x = coordinates[0]
    let y = coordinates[1]
    board[y][x] = c
  }

  updateBoard(new_color){
    let update_space_queue = [[0,0]]
    let new_board_state = this.state.board_state
    let current_color = new_board_state[0][0]

    while (update_space_queue.length > 0){
      let current_space = update_space_queue.pop()
      this.updateSpace(current_space, new_board_state, new_color)
      let new_matches = this.checkNeighbors(current_space, new_board_state, current_color)
      update_space_queue = update_space_queue.concat(new_matches)
    }

    this.setState({
      board_state: new_board_state
    })

    this.checkGameComplete(new_board_state)

  }

  handleSpaceClick(event){
    let new_color = parseInt(event.target.attributes.color.textContent)
    if (this.state.game_status && new_color !== this.state.board_state[0][0]){
      this.setState({
        moves: this.state.moves + 1
      })
      this.updateBoard(new_color)
    }
  }

  componentDidMount(){
    this.initializeGameBoard()
  }

  hideModal = () => {
    this.setState({ victory_modal_show: false })
    this.initializeGameBoard()
  }

  render(){
    let board = []

    this.state.board_state.forEach((row, yindex) => {
      let current_row = []
      row.forEach((space, xindex) => {
        current_row.push(
          <GameTile
            key={`${xindex}${yindex}`}
            color={space}
          />
        )
      })
      board.push(<div className="row" key={`row-${yindex}`}>{current_row}</div>)
    })

    let control_buttons = []
    for (let i=0; i < this.props.colors; i++){
      control_buttons.push(
        <GameTile
          key={`colorControl${i}`}
          color={i}
          handleClick={this.handleSpaceClick}
        />
      )
    }

    let modal = ""

    if (this.state.victory_modal_show) {
      modal =
          <VictoryModal
            show={this.state.victory_modal_show}
            handleClose={this.hideModal}
            moves={this.state.moves}
          />
      } else {
        modal = ""
      }

    return(
      <div className="game-board">
        <p>Moves: {this.state.moves}</p>
        {board}
        <p>Select a color to change the top left square!</p>
        <div className="row">{control_buttons}</div>
        <button onClick={this.initializeGameBoard}>reset</button>
        {modal}
      </div>
    )
  }
}

export default GameBoard
