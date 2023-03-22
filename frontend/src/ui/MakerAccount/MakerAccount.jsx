import React from "react";
import { Container, Button } from "react-bootstrap";
import "../App.css";
import "./MakerAccount.css";
import { EditMakerAccountForm } from "./components/EditMakerAccountForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../store/currentUser";
import { SkillToggleForm } from "./components/SkillToggleForm.jsx";
import { fetchAllSkills } from "../../store/skills.js";
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
                {profile &&
                    <>
                        <h1 className='my-5'>Account Settings</h1>
                        <EditMakerAccountForm profile={profile}/>
                        <Container id='category-container' className="mt-5 mb-4 rounded-4 px-4 pb-4">
                            <h2 className="text-center pt-5 pb-3">Categories / Skills</h2>
                                <SkillToggleForm profile={profile} allskills={allSkills}/>
                        </Container>
                        <Container id='portfolio-redirect-container' className=" text-center mt-5 mb-4 rounded-4 px-4 pb-4">
                            <h2 className="text-center pt-5 pb-3">Portfolio</h2>
                            <p>Show off your work! Add or make changes to your portfolio gallery.</p>
                            <Button className='m-2 btn btn-danger mb-3 fw-bold border border-dark border-2' variant='light' href={`/portfolio/${profile.profileId}`}> Go to Portfolio Page</Button>
                        </Container>
                    </>
                }
            </Container>
        </section>
        </>
    )
};
