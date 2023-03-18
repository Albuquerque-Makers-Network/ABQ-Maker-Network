import {Nav} from "react-bootstrap";

export const NotSignedIn = (props) => {

    return (
        <>
            <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link  href="/">Home</Nav.Link>
                <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                <Nav.Link href="/sign-in">Sign In</Nav.Link>
            </Nav>
        </>
    )
}