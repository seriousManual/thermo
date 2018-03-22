import React from 'react'
import {connect} from 'react-redux'

export function App(props) {
  let {temperature, humidity} = props
  
  return (
    <div>
      <div id="temperature">
        temperature: {temperature}
      </div>

      <div id="humidity">
        humidity: {humidity}
      </div>
    </div>
  )
}

//TODO: refactor
export default connect(state => state)(App)