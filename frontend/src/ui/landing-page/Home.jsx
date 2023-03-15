import React from "react"
import {Search} from "./componeents/Search/Search.jsx";
import {SkillIcons} from "./componeents/SkillIcons.jsx"
import {ProfileCards} from "./componeents/ProfileCards.jsx";
import {Container, Image, Row} from "react-bootstrap";
import Logo from "../../assets/maker-network-logo.png";
import {useDispatch, useSelector} from "react-redux";
import profile, {fetchAllProfiles} from "../../store/profiles.js";
import {fetchAllPopularSkills} from "../../store/skills.js";

export const Home = () => {

    // adds all maker profiles to page
    const allProfiles = useSelector(state => {
        if (state?.profiles.constructor.name === "Object")
        {
            return Object.values(state.profiles)
        } else []
    })

    // adds all popular skills to page
    const allPopularSkills = useSelector(state => {
        if (state?.skills.constructor.name === "Object")
        {
            return Object.values(state.skills)
        } else []
    })

    // console.log(profile)

    const dispatch = useDispatch()
    const initialEffect = () => {
        dispatch(fetchAllProfiles()), dispatch(fetchAllPopularSkills())
    }

    React.useEffect(initialEffect, [])


    return (
        <>
            <section id='intro'>
                <Container id='intro-content'>
                    <Container  className='text-center my-3'>
                    <Image className="me-4" fluid src={Logo} alt='image of ABQ Maker Network logo. Text reads ABQ Maker Network.' width='150rem'/>
                    <h2 className="text-center my-5">Welcome to the ABQ Maker Network!</h2>
                    </Container>

                    <Container className="my-5 mx-auto px-md-0 px-4">
                        <h3 className="my-3">Ready to start collaborating with others?</h3>
                        <p>Start searching by maker information or skill type.</p>
                        <Search/>
                    </Container>
                </Container>
            </section>
            <section>
                <Container className="my-5 mx-auto px-md-0 px-4">
                    <h4 className="my-3">Popular Skills</h4>
                    <Container>
                        <Row id='skill-icons' className='gap-md- gap-lg-3'>
                            {allPopularSkills.map(allPopularSkills => <SkillIcons allPopularSkills={allPopularSkills} key={allPopularSkills.skillId}/>)}
                        </Row>
                    </Container>
                </Container>
            </section>
            <section>
                <Container className="my-5 mx-auto px-md-0 px-4">
                    <Row>
                        {allProfiles.map(allProfiles => <ProfileCards allProfiles={allProfiles} key={allProfiles.profileId}/>)}
                    </Row>
                </Container>
            </section>
        </>
    )
}