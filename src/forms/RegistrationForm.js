import React, { Component } from 'react'
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';

const formValid = formErrors => {
    let valid = true

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}

const emailRegex = `(?:[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`

export default class RegistrationForm extends Component {

    url = `https://5f46c004aaaf9a00161510ef.mockapi.io/api/v1/users`

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: ""
            }
        }
    }

    btnEnabled = false

    changeHandler = e => {
        e.preventDefault()
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name) {
            case 'firstName':
                formErrors.firstName = value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break;
            case 'lastName':
                formErrors.lastName = value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break; 
            case 'email':
                formErrors.email = 
                value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break; 
            case 'username':
                formErrors.username = value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break; 
            case 'password':
                formErrors.password = value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break;  
            default:
            break;
        }

        this.setState({formErrors, [name]: value}
            // , () => console.log(this.state)
            )
            if(formValid(this.state.formErrors)){
                this.btnEnabled = true
            }
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        if(formValid(this.state.formErrors)){
            axios.post(this.url, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: ""
            })
        }
        else {
            console.error('Something went wrong while submitting the form. Please try again.')
        }
    }

    

    render() {
        const { firstName, lastName, email, username, password, formErrors } = this.state
        
        return (
            <div className="wrapper ml-5">
                <Card style={{ width: '18rem' }} className="text-center">
                    <Card.Header>Sign Up</Card.Header>
                    <ListGroup variant="flush">
                <div className="wrapper">
                    <form onSubmit={this.submitHandler} noValidate>
                    <ListGroup.Item>
                        <div className="firstName">
                            <label htmlFor="firstName">
                                <div >
                                    <input 
                                        className={formErrors.firstName.length > 0 ? "error" : null}
                                        type="text" 
                                        name="firstName"
                                        id="firstName" 
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={this.changeHandler}
                                        noValidate required />
                                        
                                </div>
                                {formErrors.firstName.length > 0 
                                        && (<span className="text-red-500 text-sm">
                                        {formErrors.firstName}</span>)}
                            </label>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <div className="lastName">
                            <label htmlFor="lastName">         
                                <div>
                                    <input 
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        placeholder="Last Name" 
                                        value={lastName} 
                                        onChange={this.changeHandler} 
                                        noValidate/>
                                        {formErrors.lastName.length > 0
                                        && (<span className="errorMessage">
                                            {formErrors.lastName}</span>)}
                                </div>
                            </label>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <div className="email">
                            <label htmlFor="email">
                                <div>
                                    <input
                                        type="text" 
                                        name="email"
                                        id="email"
                                        placeholder="Email" 
                                        value={email} 
                                        onChange={this.changeHandler} 
                                        noValidate/>
                                        {formErrors.email.length > 0
                                        && (<span className="errorMessage">
                                        {formErrors.email}</span>)}
                                </div>
                            </label>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <div className="username">
                            <label htmlFor="username">
                                <div>
                                    <input
                                        type="text" 
                                        name="username"
                                        id="username"
                                        placeholder="Username" 
                                        value={username} 
                                        onChange={this.changeHandler} 
                                        noValidate/>
                                        {formErrors.username.length > 0
                                        && (<span className="errorMessage">
                                            {formErrors.username}</span>)}
                                </div>
                            </label>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <div className="password">
                            <label htmlFor="password">
                                <div>
                                    <input 
                                        name="password"
                                        id="password"
                                        placeholder="Password" 
                                        type="password"
                                        value={password} 
                                        onChange={this.changeHandler} 
                                        noValidate/>
                                        {formErrors.password.length > 0
                                        && (<span className="errorMessage">
                                            {formErrors.password}</span>)}
                                </div>
                            </label>
                        </div>
                        </ListGroup.Item>
                        <div className="btnSubmit">
                            <div className="p-3">
                                <button disabled={!this.btnEnabled}
                                    type="submit">Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                </ListGroup>
            </Card>
            </div>
        )
    }
}