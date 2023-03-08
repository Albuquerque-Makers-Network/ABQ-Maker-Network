import {Container, Image, Nav, Navbar} from "react-bootstrap";
import React from "react";
import Logo from "../assets/maker-network-logo.png"
import ProfilePicture from "../assets/profile-placeholder.png"

export function Navigation(){
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container fluid className='mx-md-5 mx-1'>
                    <Navbar.Brand className='my-3' href="/">
                        <Image className="me-4" fluid src={Logo} alt='image of ABQ Maker Network logo. Text reads ABQ Maker Network.' width='70rem'/><h2 className={'fs-5 d-inline-flex align-self-center'}>ABQ Maker Network</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle className='ms-auto mb-3'  aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className='my-3' id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/sign-up">Sign In/Up</Nav.Link>
                            {/*image displays on full screen, text on mobile*/}
                            <Nav.Link id="nav-pic"  href="/maker-account"><Image fluid className='border border-0 rounded-circle' src={ProfilePicture} width='40'/></Nav.Link>
                            <Nav.Link id="nav-account" href="/maker-account">Account Page</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}