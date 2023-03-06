import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";

export function Navigation(){
    return (
        <>
            <Navbar bg="secondary" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Toggle className='ms-auto'  aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Navbar.Brand className='px-2' href="/">Home</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}