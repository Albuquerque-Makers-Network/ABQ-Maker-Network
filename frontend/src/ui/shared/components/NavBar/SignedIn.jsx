import {Image, Nav, Container} from "react-bootstrap";
import {SignOut} from "./SignOut.jsx";
import {useSelector} from "react-redux";

export const SignedIn = (props) => {

    const { profile } = props
    const handleAccountRedirect = () => {
        if (profile.profileIsMaker === true) {
            window.location.replace('/maker-account')
        } else {
            window.location.replace('/community-account')
        }
    }

    return (
        <>
            <Nav className="ms-auto d-flex">
                <Nav.Link className='py-0' href="/">Home</Nav.Link>
                {/*image displays on full screen, Account page text displays on mobile*/}
                <Nav.Link id="nav-account" onClick={handleAccountRedirect}>Account Page</Nav.Link>
                <Container className="p-0 m-0 text-lg-end">
                    <Nav.Link className='py-0' onClick={handleAccountRedirect}>Signed in as: {profile.profileName}</Nav.Link>
                    <SignOut/>
                </Container>
                <Nav.Link id='nav-pic' onClick={handleAccountRedirect}>
                    <Image fluid className='border border-0 rounded-3' src={profile.profileImageUrl} width='50'/>
                </Nav.Link>
            </Nav>
        </>
    )
}