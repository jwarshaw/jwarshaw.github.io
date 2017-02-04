import React, { Component } from 'react';
import './style.css';

import name from '../../images/name.png';
import email from '../../images/email.png';
import message from '../../images/message.png';

export default class Form extends Component {
  constructor() {
    super()
    this.state = {name: '', email: '',  message: ''};
  
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    var contactData = { 
      contact: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    };

    fetch('/api/contact', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(contactData)
    }).then(console.log('Fetch request sent'));
  }

  render() {
    return (
      <form className='contact-form' onSubmit={this.handleSubmit}>
        <div id='wr-name'>
          <label>
            <img className='form-img' src={name} alt='name'></img>
            <br/>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
        </div>
        <br/>
        <div id='wr-email'>
          <label>
            <img className='form-img' src={email} alt='email'></img>
            <br/>
            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
          </label>
        </div>
        <br/>
        <div id='wr-message'>
          <label>
            <img className='form-img' src={message} alt='message'></img>
            <br/>
            <textarea value={this.state.value} onChange={this.handleMessageChange} />
          </label>
        </div>
        <br/>
        <div id="wr-submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
