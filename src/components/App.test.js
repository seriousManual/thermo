import React from 'react'
import {shallow} from 'enzyme'
import {App} from './App'

it('renders the App with the provides properties', () => {
  let wrapper = shallow(<App temperature={23} humidity={42} />)

  expect(wrapper.find('#temperature').text()).toEqual('temperature: 23')
  expect(wrapper.find('#humidity').text()).toEqual('humidity: 42')
})