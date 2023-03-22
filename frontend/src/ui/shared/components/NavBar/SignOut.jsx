import React from "react";
import {useDispatch} from "react-redux";
import {httpConfig} from "../../utils/httpconfig.js";
import {getAuth} from "../../../../store/auth.js";
import {Nav} from "react-bootstrap";


export const SignOut = (props) => {
    const dispatch = useDispatch()
    const signOut = () =>
        httpConfig.get('/apis/sign-out').then(reply => {
            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
                window.location = '/'
            }
        })


    return (
        <>
            <Nav.Link className='py-0' onClick={signOut}>Log Out?</Nav.Link>
        </>
    )
}