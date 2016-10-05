import React, { Component, PropTypes } from 'react';
import Section from './Section';
import Collection from './Collection.jsx';

const data = [
  {title: 'test', description: 'adfggr'},
  {title: 'test', description: 'adfggr'}
]

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Section type='left'>
          <Collection data={data} />
        </Section>
        <Section type='right'>
          Right Side?
        </Section>
      </div>
    );
  }
}
