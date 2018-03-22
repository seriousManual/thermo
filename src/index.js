import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer, {setTemperature, setHumidity} from './lib/state/state'
import Sensor from './lib/Sensor'
import App from './components/App'

import './index.css'

let store = createStore(reducer)
let sensor = new Sensor()

store.dispatch(setTemperature(sensor.getTemperature()))
store.dispatch(setHumidity(sensor.getHumidity()))

sensor
  .on('temperature', temperature => store.dispatch(setTemperature(temperature)))
  .on('humidity', humidity => store.dispatch(setHumidity(humidity)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))