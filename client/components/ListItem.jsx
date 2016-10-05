import React, { Component, PropTypes } from 'react';


const style = {
  border: '1px solid red',
  maxWidth: '200px',
  padding: '20px',
  margin: '10px'
}

export default class ListItem extends Component {
  render() {
    return (
      <div className="list-item" style={style}>
        <div>{this.props.item.title}</div>
        <div>{this.props.item.description}</div>
      </div>
    )
  }
}
