# React Controlled Focus

The biggest advantage of using React is having the possibility of a completely declarative UI. This is amazing until you run into trying to controll focus.

This is might attempt at creating a POC to manage `focus` the same way [controled components](http://facebook.github.io/react/docs/forms.html#controlled-components) handle `value`.

The biggest difference between `focus` and `value` is that `focus` is not actually a property of the input itself, but rather the document, in the form of the `document.activeElement`. This POC approaches the problem with this understanding, moving the focus management outside of the individual fields and up to a `<ControlledFocus>` top level component.


## Usage

The idea is that you would have a single on of this in a given page, (otherwhise they would just fight with each other for where the focus should be).

So given the application bellow:

```jsx
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
        <h1>Focus on {this.state.activeElement}</h1>
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
```

We can programatically request the focus on the `input-1` on the first render, and make sure that
