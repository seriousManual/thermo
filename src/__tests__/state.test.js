import reducer, {setTemperature, setHumidity} from '../lib/state/state'

test('should create a initial state', () => {
  expect(reducer()).toEqual({temperature: null, humidity: null})
})

test('should set the temperature', () => {
  const state = {temperature: 23, humidity: 42}
  const resultState = reducer(state, setTemperature(1337))

  expect(state).not.toBe(resultState)
  expect(resultState).toEqual({temperature: 1337, humidity: 42})
})

test('should set the humidity', () => {
  const state = {temperature: 23, humidity: 42}
  const resultState = reducer(state, setHumidity(1338))
  
  expect(state).not.toBe(resultState)
  expect(resultState).toEqual({temperature: 23, humidity: 1338})
})