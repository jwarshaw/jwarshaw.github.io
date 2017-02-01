import React, { Component } from 'react';
import './style.css';

import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

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
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
