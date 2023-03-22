import {Container, Image, Nav, Navbar} from "react-bootstrap";
import React from "react";
import Logo from "../../../../assets/maker-network-logo.png"
import "../../../App.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../../../../store/currentUser.js";
import {SignedIn} from "./SignedIn"
import {NotSignedIn} from "./NotSignedIn.jsx";

export function Navigation(){

    const dispatch = useDispatch()
    const profile = useSelector(state => state.currentUser ? state.currentUser : null)

    const sideEffects = () => {
        dispatch(fetchCurrentUser())
    }

    React.useEffect(sideEffects, [dispatch])

    return (
        <>
            <Navbar className='my-3' expand="lg">
                <Container id='nav-bar' fluid className='mx-md-5'>
                    <Navbar.Brand className='d-flex my-3' href="/">
                        <Image id='nav-brand' className="me-4" fluid src={Logo} alt='image of ABQ Maker Network logo. Text reads ABQ Maker Network.' width='80rem'/>
                        <h2  className='fs-5 d-inline-flex align-self-center'>ABQ MAKER NETWORK</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle className='ms-auto mb-3 border-3'  aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className='my-3' id="basic-navbar-nav" >
                        {!profile &&
                                <>
                                <NotSignedIn profile={profile}/>
                            </>
                        }

                        {profile &&
                            <>
                                <SignedIn profile={profile}/>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}