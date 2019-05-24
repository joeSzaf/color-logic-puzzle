import React, { Component } from 'react'

class VictoryModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none"

    return(
      <div className={showHideClassName}>
        <section className="modal-main">
          <h1>You did it! Congrats!</h1>
          <p>It only took {this.props.moves} moves.</p>
          <button onClick={this.props.handleClose}>Play Again</button>
        </section>
      </div>
    )
  }
}

export default VictoryModal
