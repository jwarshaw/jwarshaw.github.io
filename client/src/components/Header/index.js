import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import './style.css';

import home from '../../images/home.png';
import about from '../../images/about.png';
import work from '../../images/work.png';
import contact from '../../images/contact.png';

export default class Header extends Component {
  render() {
    return (
    	<ul className="header">
    	  <li><IndexLink to="/" activeClassName="active"><img className="navBut" src={home} alt='home'></img></IndexLink></li>
        <li><Link to="/about" activeClassName="active"><img className="navBut" src={about} alt='about'></img></Link></li>
        <li><Link to="/work" activeClassName="active"><img className="navBut" src={work} alt='work'></img></Link></li>
        <li><Link to="/contact" activeClassName="active"><img className="navBut" src={contact} alt='contact'></img></Link></li>
      </ul>
    );
  }
}