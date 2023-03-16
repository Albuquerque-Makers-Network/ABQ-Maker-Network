import {Image, Nav} from "react-bootstrap";
import ProfilePicture from "../../../../assets/profile-placeholder.png";

export const SignedIn = (props) => {

    const { profile } = props


    return (
        <>
            <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link  href="/">Home</Nav.Link>
                {/*image displays on full screen, text on mobile*/}
                <Nav.Link id="nav-pic"  href="/maker-account"><Image fluid className='border border-0 rounded-3' src={ProfilePicture} width='50'/></Nav.Link>
                <Nav.Link id="nav-account" href="/maker-account">Account Page</Nav.Link>
            </Nav>
        </>
    )
}