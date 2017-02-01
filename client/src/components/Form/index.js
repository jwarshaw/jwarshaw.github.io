import React, { Component } from 'react';
import './style.css';

import name from '../../images/name.png';
import email from '../../images/email.png';
import message from '../../images/message.png';

export default class Form extends Component {
  constructor(props) {
    super(props)
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
      <form onSubmit={this.handleSubmit}>
        <label>
          <img src={name} alt='name'></img>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          <img src={email} alt='email'></img>
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          <img src={message} alt='message'></img>
          <textarea value={this.state.value} onChange={this.handleMessageChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
