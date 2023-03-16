import {Image, Nav, Container} from "react-bootstrap";
import ProfilePicture from "../../../../assets/profile-placeholder.png";

export const SignedIn = (props) => {

    const { profile } = props


    return (
        <>
            <Nav className="ms-auto d-flex">
                <Nav.Link className='py-0' href="/">Home</Nav.Link>
                {/*image displays on full screen, Account page text displays on mobile*/}
                <Nav.Link id="nav-account" href="/maker-account">Account Page</Nav.Link>
                <Container className="p-0 m-0 text-lg-end">
                    <Nav.Link className='py-0' href="/maker-account">Signed in as: {profile.profileName}</Nav.Link>
                    <Nav.Link className='py-0' href="/maker-account">Log Out?</Nav.Link>
                </Container>
                <Nav.Link id='nav-pic' href="/maker-account">
                    <Image fluid className='border border-0 rounded-3' src={profile.profileImageUrl} width='50'/>
                </Nav.Link>
            </Nav>
        </>
    )
}