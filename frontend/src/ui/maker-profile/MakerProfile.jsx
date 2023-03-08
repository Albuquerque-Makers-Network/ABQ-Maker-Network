import {Col, Container, Image, Row} from "react-bootstrap";
import {PortfolioImage} from "./PortfolioImage.jsx";
import React from "react";
import {Skill} from "./Skill.jsx";
import styles from "./MakerProfile.module.css"


export function MakerProfile() {
  return (
    <>
  <Container className="bg-light p-5 ps-lg-0 mt-5 mx-auto rounded-4">
    <Row>
      <Col className="d-flex align-content-center">
        <Image roundedCircle height={250} width={250} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="profile picture" className=" d-block mx-auto mb-lg-0 mb-3" id="profile-image"/>
      </Col>
      <Col lg={6} className="order-3 order-sm-2">
        <h2 className="text-center text-md-start">profileFullName</h2>
        <p className="mt-3">profileAboutMe: As High as Honor. The winds of Winter. Never Resting. Can a man still be brave if he’s afraid? That is the only time a man can be brave.Forgive my manners. I don't see many ladies these days. Lucky for the ladies. A forked purple lightning bolt, on black field speckled with four-pointed stars. The tourney of Ashford Meadows. It's ten thousand miles between Kings landing and the wall.</p>
        <p>profileEmail</p>
      </Col>
      <Col className="order-2 order-sm-3 my-3 mt-lg-0 d-block d-lg-inline">
        <h2 className="text-center text-lg-start">Skills:</h2>
        <Skill />
      </Col>
    </Row>
  </Container>
    <Container>
    <Row>
      <Col>
        <PortfolioImage />
      </Col>
      <Col lg={4} className="bg-light rounded-4 p-4 mt-4">
        <h2 className="text-center text-sm-start">Pricing:</h2>
        <p className="mt-3">profilePricing: Jin ave sekke verven anni m'orvikoon. Hash yer dothrae chek asshekh? Ki fin yeni?</p>
      </Col>
    </Row>
  </Container>
    </>
  )

}