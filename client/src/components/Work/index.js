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
          <li className="li-project">
            <div className='div-project'>
              <img className='work-title' src={raspberryTitle} alt="raspberry drive"></img>
              <img className='work-img' src={raspberry} alt="car"></img>
              <p className='description'>
                A seven day sprint to design and build a self-driving radio controlled car. In the toolbag: Python, OpenSSH, OpenCV, a Raspberry Pi, a $9 RC car, and tape. Lots of tape.
              </p>
            </div>
          </li>
          <li className="li-project">
            <div className='div-project'>
              <img className='work-title' src={sandboxTitle} alt="sandbox"></img>
              <img className='work-img' src={sandbox} alt="sandbox"></img>
              <p className='description'>
                A two day sprint to build wikipedia for kids. Features include user authentication and authorization CRUD basics, admin level access, and stored, viewable past versions of entries.
              </p>
            </div>
          </li>
          <li className="li-project">
            <div className='div-project'>
              <img className='work-title' src={sandboxTitle} alt="placeholder"></img>
              <img className='work-img' src={calculator} alt="calculator"></img>
              <p className='description'>
                Blah blah blah blah to build wikipedia for kids. Features include user authentication and authorization blah blah, admin level access, blah blah, viewable blah blah of entries.
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
