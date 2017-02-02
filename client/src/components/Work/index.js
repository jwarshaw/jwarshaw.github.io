import React, { Component } from 'react';
import './style.css';

import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

import breadboard from '../../images/breadboard.png';
import sandbox from '../../images/sandbox.png';


export default class Work extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='Work'>
        <div>
          <Header />
        </div>
        <div className="work-content">
          <ul className="work-list">
            <li className="example">
              <img src={breadboard} alt="breadboard"></img>
            </li>
            <li className="example">
              <img src={sandbox} alt="sandbox"></img>
            </li>
            <li className="example">
              <img src={breadboard} alt="breadboard"></img>
            </li>
          </ul>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
