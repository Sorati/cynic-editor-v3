import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'

import GameContainer from '../game/game-container'


class Home extends React.Component {

  componentDidMount(){
    
  }

  render(){
    return (
      <div>
        <div className="gamecontainer" >
          <GameContainer />
        </div>
        
      </div>
    )
  }
}

export default Home