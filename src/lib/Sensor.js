import {EventEmitter} from 'events'

export default class Sensor extends EventEmitter {
  constructor() {
    super()

    this._humidity = 50
    this._temperature = 20

    this._humidityTick()
    this._temperatureTick()
  }

  getHumidity() { 
    return this._humidity
  }

  getTemperature() {
    return this._temperature
  }

  _temperatureTick() {
    this._temperature = this._warp(this._temperature, -10, 35)

    this.emit('temperature', this._temperature)

    this._reschedule(() => this._temperatureTick())
  }

  _humidityTick() {
    this._humidity = this._warp(this._humidity, 20, 80)

    this.emit('humidity', this._humidity)

    this._reschedule(() => this._humidityTick())
  }

  _warp(value, lower, upper) {
    value = value + (Math.random() * (Math.random() < 0.5 ? -1 : 1))
    value = Math.max(lower, value)
    value = Math.min(upper, value)

    return value
  }

  _reschedule(handler) {
    setTimeout(handler, 3000 + parseInt(Math.random() * 5000, 10))
  }
}