import React from "react";
import ProfilePicture from "../../../assets/profile-placeholder.png"
import {Card, Row, Col} from "react-bootstrap";
import "../LandingPage.css"
export function ProfileCards() {
    return (
        <>
            <Row>
                <Col className='my-3' xs={6} md={4} lg={3}>
                    <Card id='profile-card'>
                        <Card.Link href="/maker-profile">
                            <Card.Img fluid variant="top" src={ProfilePicture}/>
                        </Card.Link>
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}