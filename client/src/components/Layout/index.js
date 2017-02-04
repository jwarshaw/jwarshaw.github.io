import React, { Component } from 'react';
import './style.css';

import Header from '../Header/index.js'
import Footer from '../Footer/index.js'

export default class Layout extends Component {
	// static propTypes = {}
	// static defaultProps = {}
	// state = {}

	render() {
	  return (
	    <div className='Layout'>
	    	<div className='wr-header'>
		    	<Header />
		    </div>	    
		    <div className='wr-content'>
		    	{this.props.children}
		    </div>
	  	  <div className='wr-footer'>
		    	<Footer />
	    	</div>
	    </div>
	  );
	}
}
