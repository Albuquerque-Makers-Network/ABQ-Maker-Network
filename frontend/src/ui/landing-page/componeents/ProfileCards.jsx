import React from "react";
import {Card, Col, Container, Image} from "react-bootstrap";
import "../LandingPage.css"
import {Link} from "react-router-dom";

export function ProfileCards(props) {
  const {profile} = props

  return (
    <>
      <Col xs={6} sm={6} md={4} lg={3}>
        <Link id='home-card-link' to={`/maker-profile/${profile.profileId}`} className='my-3' >
            <Card id='profile-card'>
                <Container id="home-profile-card-image" className='d-flex p-0 m-0'>
                  <Image fluid variant="top" src={profile.profileImageUrl}/>
                </Container>
                <Card.Body>
                  <Card.Title className='fs-6'>{profile.profileFullName}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
      </Col>
</>
)
}