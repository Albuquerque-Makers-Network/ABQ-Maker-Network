import React from "react";
import {Container, Row, Col, Image, Button, Form} from "react-bootstrap";
import "../App.css";
import {AboutMe} from "./components/AboutMe.jsx";
import {Pricing} from "./components/Pricing.jsx";
import {UserName} from "./components/UserName.jsx";
import {PhotoUpload} from "./components/PhotoUpload.jsx";
import {Categories} from "./components/Categories.jsx";
import "./MakerAccount.css"



export function MakerAccount() {
    return (
        <>
        <section>
            <Container className="maker-account-form">
                <h1 className='mt-5'>Account Settings</h1>
                <Row id='primary-content'>
                    <Col sm={12} lg={4}>
                        <UserName />
                    </Col>
                    <Col sm={12} lg={8}>
                        <Row>
                            <Col xs={12} lg={6}>
                                <AboutMe />
                            </Col>
                            <Col xs={12} lg={6}>
                                <Pricing />
                            </Col>
                            <Col xs={12}>
                                <Categories />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <PhotoUpload />
                <Form.Group>
                    <Container className="d-grid my-4">
                        <Button type="submit" size="lg" id="changes-button">
                            Submit Changes
                        </Button>
                    </Container>
                </Form.Group>
            </Container>
        </section>
        </>
    )
}
