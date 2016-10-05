import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import ListItem from './ListItem.jsx';

const masonryOptions = {
    transitionDuration: 0
};

export default class Collection extends Component {
  static PropTypes = {
    data: PropTypes.Array
  }
  render() {
    const { data } = this.props
    const childElements = data && data.map((item) => <ListItem item={item} />)
    return (
      <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
          {childElements}
      </Masonry>
    )
  }
}
