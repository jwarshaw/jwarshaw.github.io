import React, { Component } from 'react';
import './style.css';
import ContactForm from '../Form/index.js'

export default class Contact extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='Contact'>
        <div className="contact-content">
          <ContactForm />
        </div>
      </div>
    );
  }
}
