import React from 'react'

const GameTile = props => {

  const COLORS = {
    0: "red",
    1: "blue",
    2: "green",
    3: "yellow"
  }

  return(
    <div className={`grid-tile grid-tile-color-${COLORS[props.color]}`}>
      {props.color}
    </div>
  )
}

export default GameTile
