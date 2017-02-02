import React, { Component } from 'react';
import './style.css';

import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

import car from '../../images/car.png';
import sandbox from '../../images/sandbox.png';
import calculator from '../../images/calculator.png';

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
              <img className='work-img' src={car} alt="car"></img>
            </li>
            <li className="example">
              <img className='work-img' src={sandbox} alt="sandbox"></img>
            </li>
            <li className="example">
              <img className='work-img' src={calculator} alt="calculator"></img>
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
