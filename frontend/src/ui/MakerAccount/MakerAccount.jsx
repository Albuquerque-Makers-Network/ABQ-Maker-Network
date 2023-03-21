import React from "react";
import {Container, Row, Col, Image, Button, Form} from "react-bootstrap";
import "../App.css";
import "./MakerAccount.css"
import {EditMakerAccountForm} from "./EditMakerAccountForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../store/currentUser";
import {SkillToggleForm} from "./SkillToggleForm"
import {fetchAllSkills} from "../../store/skills.js";
import {fetchAllProfiles} from "../../store/profiles.js";
export const MakerAccount= () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state.currentUser ? state.currentUser : null)

    const allSkills = useSelector (state => {
        if (state?.skills.constructor.name === "Object"){
            return Object.values(state.skills)
        } else []
    })

    const sideEffects = () => {
        dispatch(fetchCurrentUser()), dispatch(fetchAllSkills())
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
                        <SkillToggleForm/>
                    </>
                }
            </Container>
        </section>
        </>
    )
};
