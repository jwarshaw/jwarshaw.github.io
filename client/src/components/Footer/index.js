import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import './style.css';

import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import email from '../../images/mail.png';

export default class Header extends Component {
  render() {
    return (
    	<ul className="footer">
    	  <li><a href="https://www.linkedin.com/in/jwarshaw"><img src={linkedin} alt="linkedin"></img></a></li>
    	  <li><a href="https://www.github.com/jwarshaw"><img src={github} alt="github"></img></a></li>
    	  <li><a href="mailto:jonathan.warshaw@gmail.com?Subject=Hi%20Jonathan"><img src={email} alt="email"></img></a></li>
    	</ul>
    );
  }
}