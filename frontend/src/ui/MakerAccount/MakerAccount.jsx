import React from "react";
import {Container, Row, Col, Image, Button, Form} from "react-bootstrap";
import "../App.css";
import {AboutMe} from "./components/AboutMe.jsx";
import {Pricing} from "./components/Pricing.jsx";
import {UserName} from "./components/UserName.jsx";
import {PhotoUpload} from "./components/PhotoUpload.jsx";
import {Categories} from "./components/Categories.jsx";
import "./MakerAccount.css"
import {EditMakerAccountForm} from "./EditMakerAccountForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../store/currentUser";
export const MakerAccount= () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state.currentUser ? state.currentUser : null)

    const sideEffects = () => {
        dispatch(fetchCurrentUser())
    }

    React.useEffect(sideEffects, [dispatch])
    return (

        <>
        <section>
            <Container id="maker-account" className='p-5'>
                <h1 className='mt-5'>Account Settings</h1>
                {profile &&
                    <>
                        <EditMakerAccountForm profile={profile}/>
                    </>
                }
            </Container>
        </section>
        </>
    )
};
