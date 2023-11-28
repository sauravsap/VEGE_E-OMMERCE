import React, { Component } from 'react'
import {Form } from 'react-bootstrap';
import './Login.css'



export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <Form className="d-flex">
                    <h1>
                        Login
                    </h1>
                    <input type="email" placeholder="username"/>
                    <br />
                    <input type="password" placeholder="Password"/>
                    <br />
                    <button type="subimt">Login</button>
                    
                      

                </Form>
            </div>
        )
    }
}