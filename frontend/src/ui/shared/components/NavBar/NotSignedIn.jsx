import {Button, Col, Image, Nav} from "react-bootstrap";
import ProfilePicture from "../../../../assets/profile-placeholder.png";

export const NotSignedIn = (props) => {

    const { profile } = props

    return (
        <>
            <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link  href="/">Home</Nav.Link>
                <Nav.Link href="/sign-up">Sign In/Up</Nav.Link>
            </Nav>
        </>
    )
}