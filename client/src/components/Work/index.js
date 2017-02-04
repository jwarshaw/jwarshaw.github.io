import React, { Component } from 'react';
import './style.css';

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
    );
  }
}
