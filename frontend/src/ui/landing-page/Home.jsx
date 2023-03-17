import React from "react"
import {SkillIcons} from "./componeents/SkillIcons.jsx"
import {ProfileCards} from "./componeents/ProfileCards.jsx";
import {Col, Container, DropdownButton, Image, Row} from "react-bootstrap";
import Logo from "../../assets/maker-network-logo.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProfiles, fetchProfileByProfileName} from "../../store/profiles.js";
import {fetchAllSkills} from "../../store/skills.js";
import {fetchProfileBySkillId} from "../../store/profiles.js";
import {SkillDropDown} from "./componeents/Search/SkillDropDown.jsx";
import {Search} from './componeents/Search/Search.jsx'

export const Home = () => {

    // adds all maker profiles to page
    const profiles = useSelector(state => {
        if (state?.profiles.constructor.name === "Object")
        {
            return Object.values(state.profiles)
        } else []
    })

    // adds all popular skills to page
    const popularSkills = useSelector(state => {
        if (state?.skills.constructor.name === "Object")
        {
            let popularSkills = []
            for (let skillId in state.skills) {
                if (state.skills[skillId].skillIsPopular === true){
                    popularSkills.push(state.skills[skillId])
                }
            }
            return popularSkills

        } else []
    })

    // console.log(popularSkills)

    const allSkills = useSelector (state => {
        if (state?.skills.constructor.name === "Object"){
            return Object.values(state.skills)
        } else []
    })

    // console.log(profile)

    const dispatch = useDispatch()
    const initialEffect = () => {
        dispatch(fetchAllProfiles()), dispatch(fetchAllSkills())
    }

    React.useEffect(initialEffect, [])

    const filterProfilesBySkill = (skillId) => {
        dispatch(fetchProfileBySkillId(skillId))
    }

    const filterProfilesinSearch =(profileName)=> {
        dispatch (fetchProfileByProfileName(profileName))
    }

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

                        <Container fluid className="p-0">
                            <Row>
                                <Col sm={10}>
                                    <Search/>
                                </Col>
                                <Col sm={2}>
                                    <DropdownButton variant="outline-light" id="dropdown-button" title="All Skills">
                                        {allSkills.map(allskill => <SkillDropDown filterProfilesBySkill={filterProfilesBySkill} allskill={allskill} key={allskill.skillId}/>)}
                                    </DropdownButton>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </section>
            <section>
                <Container className="my-5 mx-auto px-md-0 px-4">
                    <h4 className="my-3">Popular Skills</h4>
                    <Container>
                        <Row id='skill-icons' className='gap-md- gap-lg-3'>
                            {popularSkills.map(popularSkill => <SkillIcons filterProfilesBySkill={filterProfilesBySkill} popularSkill={popularSkill} key={popularSkill.skillId}/>)}
                        </Row>
                    </Container>
                </Container>

            </section>
            <section>
                <Container className="my-5 mx-auto px-md-0 px-4">
                    <Row>
                        {profiles.map(profile => <ProfileCards profile={profile} key={profile.profileId}/>)}
                    </Row>
                </Container>
            </section>
        </>
    )
}