import React, { Component } from 'react';
import './style.css';

import raspberryTitle from '../../images/raspberry.png';
import raspberry from '../../images/car.png';
import sandboxTitle from '../../images/sandboxtitle.png';
import sandbox from '../../images/sandbox.png';
import legitTitle from '../../images/legitTitle.png';
import legit from '../../images/legit.png';


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
                A seven day sprint to build a self-driving RC car. In the toolbag: M2M communication, computer vision, microprocessors, a $9 RC car, and tape. Lots of tape.
              </p>
            </div>
          </li>
          <li className="li-project">
            <div className='div-project'>
              <img className='work-title' src={sandboxTitle} alt="sandbox"></img>
              <img className='work-img' src={sandbox} alt="sandbox"></img>
              <p className='description'>
                A two day sprint to design wikipedia for kids using RoR. Features include multi-user CRUD functionality, admin level access, and stored, viewable past versions of entries.
              </p>
            </div>
          </li>
          <li className="li-project">
            <div className='div-project'>
              <img className='work-title' src={legitTitle} alt="legit hub"></img>
              <img className='work-img' src={legit} alt="legit hub"></img>
              <p className='description'>
                A one day sprint to design an organizational tool for Github Gists using Sinatra, Octocat, and OAuth. 
                <br/>
                <br/>
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
