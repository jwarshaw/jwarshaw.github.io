import React, { Component } from 'react';
import './style.css';

import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import email from '../../images/mail.png';

export default class Header extends Component {
  render() {
    return (
    	<ul className="footer">
    	  <li><a href="https://www.linkedin.com/in/jwarshaw"><img className='footBut' src={linkedin} alt="linkedin"></img></a></li>
    	  <li><a href="https://www.github.com/jwarshaw"><img className='footBut' src={github} alt="github"></img></a></li>
    	  <li><a href="mailto:jonathan.warshaw@gmail.com?Subject=Hi%20Jonathan"><img className='footBut' src={email} alt="email"></img></a></li>
    	</ul>
    );
  }
}