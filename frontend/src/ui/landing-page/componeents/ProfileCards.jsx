import React from "react";
import {Card, Col, Container, Image} from "react-bootstrap";
import "../LandingPage.css"
import {Link, Route, useParams} from "react-router-dom";
import {MakerProfile} from "../../maker-profile/MakerProfile.jsx";

export function ProfileCards(props) {
  const {allProfiles} = props

  return (
    <>
      <Col xs={6} sm={6} md={4} lg={3}>
        <Link to={`/maker-profile/${allProfiles.profileId}`} className='my-3' >
            <Card id='profile-card'>
                <Container id="home-profile-card-image" className='d-flex p-0 m-0'>
                  <Image fluid variant="top" src={allProfiles.profileImageUrl}/>
                </Container>
                <Card.Body>
                  <Card.Title className='fs-6'>{allProfiles.profileFullName}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
      </Col>
</>
)
}