import { Component } from 'react';
import './style.css';

export default class Form extends React.Component {
  getInitialState: function() {
    return {firstName: ''};
  },
  handleNameChange: function(event) {
    this.setState({name: event.target.value});
  },
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
