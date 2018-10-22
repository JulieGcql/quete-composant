import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          email: "mon@email.com",
          password: "monPassw0rd",
          confirmation: "monPassw0rd",
          name: "James",
          lastname: "Bond"
        }

        this.updateEmailField = this.updateEmailField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      updateEmailField(event) {
        this.setState({[event.target.name]: event.target.value});
      }


      handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        if (this.state.password !== this.state.confirmation){
          alert("Wrong password, you fool...");
        } else {
          alert("Welcome 007");
        }
      }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}/>
        </label><br />
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.updateEmailField}/>
        </label><br />
        <label>
          Password confirmation:
          <input type="password" name="confirmation" value={this.state.confirmation} onChange={this.updateEmailField}/>
        </label><br />
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.updateEmailField}/>
        </label><br />
        <label>
          Lastname:
          <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateEmailField}/>
        </label><br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
