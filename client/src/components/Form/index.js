import React, { Component } from 'react';
import './style.css';

export default class Form extends React.Component {
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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Message:
          <textarea value={this.state.value} onChange={this.handleMessageChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
