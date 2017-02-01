import React, { Component } from 'react';
import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='About'>
        <div>
          <Header />
        </div>
        <div className="about-content">
          <p>Some stuff about me.</p>
        </div>
      </div>
    );
  }
}
