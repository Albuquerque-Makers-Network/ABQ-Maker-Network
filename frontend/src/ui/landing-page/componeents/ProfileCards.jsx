import React from "react";
import {Card, Col, Image} from "react-bootstrap";
import "../LandingPage.css"
export function ProfileCards(props) {
    const {allProfiles} = props
    return (

        <>
            <Col className='my-3' xs={6} md={4} lg={3}>
                <Card id='profile-card'>
                    <Card.Link id="home-card-link" href="/maker-profile">
                        <Image id="home-profile-card-image" fluid variant="top" src={allProfiles.profileImageUrl}/>
                        <Card.Body className='p-2'>
                            <Card.Title className='fs-6'>{allProfiles.profileFullName}</Card.Title>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </Col>
        </>
    )
}