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

  render() {
    return (
      <div>
        <h1>{this.state.value || 'Enter your email'} </h1>
        <input type="email" name="email" value={this.state.value} onChange={this.updateEmailField}/>
      </div>
    )
  }
}
