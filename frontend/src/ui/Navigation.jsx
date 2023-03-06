import {Container, Image, Nav, Navbar} from "react-bootstrap";
import React from "react";
import Logo from "../assets/maker-network-logo.png"
import ProfilePicture from "../assets/profile-placeholder.png"

export function Navigation(){
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle className='ms-auto'  aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  className='my-3 mx-5' id="basic-navbar-nav" >
                        <Navbar.Brand href="/">
                        <Image fluid src={Logo} alt='image of ABQ Maker Network logo. Text reads ABQ Maker Network.' width='100'/> ABQ Maker Network
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/sign-up">Sign In/Up</Nav.Link>
                            <Nav.Link href="/sign-up"><Image fluid src={ProfilePicture} width='30'/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}