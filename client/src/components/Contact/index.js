import React, { Component } from 'react';
import './style.css';

import ContactForm from '../Form/index.js'
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

export default class Contact extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='Contact'>
        <div>
          <Header />
        </div>
        <div className="contact-content">
          <ContactForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
