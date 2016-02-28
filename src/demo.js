import React from 'react'
import { render } from 'react-dom'
import ControlledFocus from './index'

const App = React.createClass({
  getInitialState () {
    return {
      inputSequence: 1
    }
  },

  tick () {
    this.setState({ inputSequence: this.state.inputSequence % 5 + 1 })
  },

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000)
  },

  componentWillUnmount () {
    clearInterval(this.interval)
  },

  render () {
    return (
      <ControlledFocus activeElement={`input-${this.state.inputSequence}`} onFocus={this.handleFocus}>
        <h1>Focus on {this.state.inputSequence}</h1>
        <input data-focus-id='input-1'/>
        <input data-focus-id='input-2'/>
        <input data-focus-id='input-3'/>
        <input data-focus-id='input-4'/>
        <input data-focus-id='input-5'/>
      </ControlledFocus>
    )
  }
})

render(<App/>, document.getElementById('react-controlled-focus'))
