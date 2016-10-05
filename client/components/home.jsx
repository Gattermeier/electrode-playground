import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from './Section';
import Collection from './Collection';

// dummy data
const data = [
  { title: 'test', description: 'adfggr' },
  { title: 'test', description: 'adfggr' }
]

class HomeWrapper extends React.Component {
  render() {
    return (
     <Home data={this.props.data}/>
    );
  }
}

export class Home extends Component {
  componentDidMount() {
    fetch('/github', { method: 'GET' })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Section type='left'>
          Masonry example:
          <Collection data={data} />
        </Section>
        <Section type='right'>
        </Section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps
)(HomeWrapper);
