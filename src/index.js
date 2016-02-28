import React, { PropTypes } from 'react'

export default React.createClass({
  propTypes: {
    activeElement: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
    onFocus: PropTypes.func
  },

  getDefaultProps () {
    return {
      onFocus: () => {}
    }
  },

  render () {
    return (
      <div ref='wrapper'>
        {this.props.children}
      </div>
    )
  },

  componentDidUpdate (prevProps) {
    if (prevProps.activeElement !== this.props.activeElement) {
      this.focusChild(this.props.activeElement)
    }
  },

  componentDidMount () {
    this.refs.wrapper.addEventListener('focusin', (event) => {
      const activeElement = event.target.getAttribute('data-focus-id')

      if (activeElement !== this.props.activeElement) {
        this.focusChild(this.props.activeElement)
      }

      this.props.onFocus(activeElement)
    })
  },

  focusChild (focusId) {
    const correctFocus = this.refs.wrapper.querySelector(`[data-focus-id=${focusId}]`)
    correctFocus.focus()
  }
})
