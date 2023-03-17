import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {Skill} from "./components/Skill.jsx";
import "../App.css"
import "./MakerProfile.css"
import {fetchProfileByProfileId} from "../../store/profiles.js";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {PortfolioImage} from "./components/PortfolioImage.jsx";
import {fetchPortfolioByProfileId} from "../../store/portfolios.js";
import {fetchSkillByProfileId} from "../../store/skills.js";


export function MakerProfile() {
  let selectedProfileId = useParams()

  //extracts profileId from Object
  const profileId = selectedProfileId.profileId

  const dispatch = useDispatch()

  const initialEffect = () => {
    dispatch (fetchProfileByProfileId(profileId))
    dispatch (fetchSkillByProfileId(profileId))
    dispatch (fetchPortfolioByProfileId(profileId))
  }

  React.useEffect( initialEffect, [profileId])

  const profile = useSelector (state => {
    if (state?.profiles[profileId]){
      return state.profiles[profileId]
    } else {
      return null
    }
  })

  const portfolio = useSelector (state => {
    if (state?.portfolios[profileId]){
      return state.portfolios[profileId]
    } else {
      return null
    }
  })


  const skill = useSelector (state => {
    if (state?.skills.constructor.name === "Object"){
      return Object.values(state.skills)
    } else {
      return null
    }
  })

  //renders skills on page
  const renderedSkills = (skills) => {
    return skills.map (skill => <Skill skill={skill}/> )
  }

  //renders portfolios on page
  const renderedPortfolios = (portfolios) => {
    return portfolios.map (portfolio => <PortfolioImage portfolio={portfolio}/> )
  }

      return (
        <>
          <Container className="p-5 ps-lg-0 mt-5 mx-auto rounded-4" id="background-about-me">
            <Row>
              <Col className="d-flex align-content-center">
                <Image roundedCircle height={250} width={250} src={profile.profileImageUrl}
                       alt="profile picture" className=" d-block mx-auto mb-lg-0 mb-3" id="profile-image"/>
              </Col>

              <Col lg={6} className="order-3 order-sm-2 text-light">
                <h1 className="text-center text-md-start" id="profile-name">{profile.profileName}</h1>
                <p className="mt-3" id="about-me-text">{profile.profileAboutMe}</p>
                <p id="email-text">{profile.profileEmail}</p>
              </Col>

              <Col className="order-2 order-sm-3 my-3 mt-lg-0 d-block d-lg-inline justify-content-center">
                <h2 className="text-center text-lg-start text-light" id="skills-name">Skills:</h2>
                <Row>
                {renderedSkills(skill)}
                </Row>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col className="my-3">
                {/*{renderedPortfolios(portfolio)}*/}
              </Col>
              <Col xs={12} md={4} className="rounded-4 p-4 mt-4 mb-auto text-white" id="pricing">
                <h2 className="text-md-center text-sm-start">Pricing:</h2>
                <p className=" mt-3">{profile.profilePricing}</p>
              </Col>
            </Row>
          </Container>

        </>
      )
}