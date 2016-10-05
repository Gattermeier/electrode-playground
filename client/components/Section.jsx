import React, { Component, PropTypes } from 'react'

export default class Section extends Component {
  render() {
    return (
      <div className={`section section-${this.props.type || 'default'}`}>{this.props.children}</div>
    )
  }
}
