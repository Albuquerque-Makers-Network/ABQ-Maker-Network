import React from "react";
import ProfilePicture from "../../assets/profile-placeholder.png"
import {Card, Container, Row, Col} from "react-bootstrap";

export function ProfileCards() {
    return (
        <>
            <Row>
                <Col className='my-3' md={2} lg={3}>
                    <Card>
                        <Card.Img fluid variant="top" src={ProfilePicture}/>
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}