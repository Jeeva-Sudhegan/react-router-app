import React, { Component, createRef } from 'react';
import { Input, Button } from '../HTMLElements/HTMLElements';
import '../style/Content.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault();
        if (this.state.password !== this.state.confirm) {
            alert("password mismatch");
        }
        console.log(this.name.value);
    }
    
    render() {
        return (
            <section className = "content">
                <Input type = "text" nameRef = {el => (this.name = el)} name = "name" />
                <Input type = "text" name = "email" onChange = { this.handleChange } />
                <Input type = "password" name = "password" onChange = { this.handleChange } />
                <Input type = "password" name = "confirm" onChange = { this.handleChange } />
                <Button onClick = { this.handleClick } >
                    Register
                </Button>
            </section>
        );
    }
}

export default Register;