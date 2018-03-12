import React from 'react'
import {connect} from 'react-redux'

function App(props) {
  let {temperature, humidity} = props
  
  return (
    <div>
      temperature: {temperature}
      <br />
      humidity: {humidity}
    </div>
  )
}

//TODO: refactor
export default connect(state => state)(App)