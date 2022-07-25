import React, {Component} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import logo from "./image/logo.png"
import styled from "styled-components";

const Styles = styled.div`
.navbar {
  margin-bottom: 0;
<<<<<<< HEAD
  
  
=======
>>>>>>> origin/master
}
`

export default class Header extends Component {
    render() {
        return (
          <>
            <Styles>
                <Navbar collapseOnSelect bg="light"  expand="md">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height={"50"}
                                width={"100"}
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" >
                            <Nav className="me-auto" >
                                <Nav.Link href="/home" className="fs-4">Home</Nav.Link>
                                <Nav.Link href="/about" className="fs-4">About As</Nav.Link>
                                <Nav.Link href="/contacts" className="fs-4">Contacts</Nav.Link>
                                <Nav.Link href="/blog" className="fs-4">Blog</Nav.Link>
<<<<<<< HEAD
                                <Nav.Link href="/gallery" className="fs-4">Gallery</Nav.Link>
=======
>>>>>>> origin/master
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                    aria-label="Search"
                                />
                                <Button variant="secondary">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>

          </>
        );
    }
}

