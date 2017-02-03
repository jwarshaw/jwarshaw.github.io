import React, { Component } from 'react';
import './style.css';

import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

import textwall from '../../images/textwall.png';

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
          <img id='text-wall' src={textwall} alt='wall of text'></img>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
