import React from 'react'
import AutoFocus from './react-autofocus'

export default React.createClass({
  getInitialState () {
    return {
      activeElement: 'input-1'
    }
  },

  render () {
    return (
      <AutoFocus activeElement={this.state.activeElement} onFocus={this.handleFocus}>
        <input data-focus-id='input-1'/>
        <input data-focus-id='input-2'/>
        <input data-focus-id='input-3' value="you can't focus me"/>
        <input data-focus-id='input-4'/>
        <input data-focus-id='input-5'/>
      </AutoFocus>
    )
  },

  handleFocus (activeElement) {
    if (activeElement === 'input-3') { return }
    this.setState({ activeElement })
  }
})
