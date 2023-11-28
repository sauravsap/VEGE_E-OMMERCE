import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
export default class NavbigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link to={`/`}>Home</Link>


                                <Link to={`/`}>Product</Link>

                                <Link to={`/login`}>Login</Link>



                            </Nav>
                            <Form className="d-flex">

                                <Button variant="outline-success" href='login.js' >Login</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

