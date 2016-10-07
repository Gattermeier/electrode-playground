import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from './Section';
import Collection from './Collection';
import { Test } from '../../server/plugins/webapp/actions'


// dummy data
const data = [
  { title: 'test', description: 'adfggr' },
  { title: 'test', description: 'adfggr' }
]


export class Home extends Component {
  static needs = [Test.fetch]
  constructor(){
    super()
    this.click = this.click.bind(this)
  }
  componentDidMount() {
    // fetch('/github', { method: 'GET' })
    // .then((res) => res.json())
    // .then((res) => {
    //   console.log(res)
    // })
  }
  click() {
    this.props.dispatch(Test.fetch())
  }
  render() {
    console.log('PROPS', this.props)
    return (
      <div>
        <h1>Hello World</h1>
        <btn onClick={this.click}>click</btn>
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

// const mapStateToProps = (state) => ({
//   data: state.data,
//   test: state
// });

// export default connect(state => state)(Home);
