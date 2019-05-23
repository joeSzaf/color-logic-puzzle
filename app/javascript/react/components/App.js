import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import GameContainer from "../containers/GameContainer"

export const App = (props) => {
  return (
    <div className="app">
      <GameContainer />
    </div>
  )
}

export default App
