import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };

        this.updateEmailField = this.updateEmailField.bind(this);
      }

      updateEmailField(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('A mail was submitted: ' + this.state.value);
        event.preventDefault();
      }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.value || 'Enter your email'} </h1>
        <input type="email" name="email" value={this.state.value} onChange={this.updateEmailField}/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
