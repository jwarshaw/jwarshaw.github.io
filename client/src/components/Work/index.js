import React, { Component } from 'react';
import './style.css';

import raspberryTitle from '../../images/raspberry.png';
import raspberry from '../../images/car.png';
import sandboxTitle from '../../images/sandboxtitle.png';
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
          <img className='work-title' src={raspberryTitle} alt="raspberry drive"></img>
          <li className="example">
            <img className='work-img' src={raspberry} alt="car"></img>
          </li>
          <img className='work-title' src={sandboxTitle} alt="sandbox"></img>
          <li className="example">
            <img className='work-img' src={sandbox} alt="sandbox"></img>
          </li>
          <img className='work-title' src={sandboxTitle} alt="placeholder"></img>
          <li className="example">
            <img className='work-img' src={calculator} alt="calculator"></img>
          </li>
        </ul>
      </div>
    );
  }
}
