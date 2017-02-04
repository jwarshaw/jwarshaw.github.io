import React, { Component } from 'react';
import './style.css';

import hi from '../../images/hi.png';
import imJonathan from '../../images/im_jonathan.png';

export default class Home extends Component {
	// static propTypes = {}
	// static defaultProps = {}
	// state = {}

  render() {
    return (
      <div className="Home">
          <img id="hi" src={hi} alt="Hi." />
          <img id="im-jonathan" src={imJonathan} alt="I'm Jonathan."></img>
      </div>
    );
  }
}
