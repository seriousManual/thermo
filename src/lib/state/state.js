export const ACTION_SET_TEMPERATURE = 'TEMPERATURE_SET'
export const ACTION_SET_HUMIDITY = 'HUMIDITY_SET'

export function setTemperature(temperature) {
  return {type: ACTION_SET_TEMPERATURE, temperature}
}

export function setHumidity(humidity) {
  return {type: ACTION_SET_HUMIDITY, humidity}
}

function getInitialState() {
  return {
    temperature: null,
    humidity: null
  }
}

export default function reducer(state=getInitialState(), action={}) {
  switch (action.type) {
    case ACTION_SET_TEMPERATURE:
      return {...state, temperature: action.temperature}

    case ACTION_SET_HUMIDITY:
      return {...state, humidity: action.humidity}

    default:
      return state
  }
}