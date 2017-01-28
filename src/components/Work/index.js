import React, { Component } from 'react';
import './style.css';

import breadboard from '../../images/breadboard.png';

export default class Work extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='Work'>
        <div className="work-content">
          <ul className="work-list">
            <li className="example">
              <img src={breadboard} alt="breadboard"></img>
            </li>
            <li className="example">
              <img src={breadboard} alt="breadboard"></img>
            </li>
            <li className="example">
              <img src={breadboard} alt="breadboard"></img>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
