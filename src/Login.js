import React, { Component } from "react";
import { Input, Button } from "../HTMLElements/HTMLElements";
import "../style/Content.css";

class Login extends Component {
  state = {};
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleClick = () => {
    console.log(this.state);
  }
  render() {
    console.log(__dirname);
    return (
      <div className = "content">
        <Input type="text" name="username" onChange={this.handleChange} />
        <Input type = "password" name = "password" onChange = {this.handleChange} />
        <Button onClick = {this.handleClick} >
          Submit
        </Button>
      </div>
    );
  }
}

export default Login;

