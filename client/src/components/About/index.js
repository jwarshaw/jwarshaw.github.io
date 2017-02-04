import React, { Component } from 'react';
import './style.css';

import textwall from '../../images/textwall.png';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='About'>
        <img id='text-wall' src={textwall} alt='wall of text'></img>
      </div>
    );
  }
}
