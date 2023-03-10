import React from "react";
import {Container, Row, Col, Image, Button, Form} from "react-bootstrap";
import "../App.css";
import {AboutMe} from "./components/AboutMe.jsx";
import {Pricing} from "./components/Pricing.jsx";
import {UserName} from "./components/UserName.jsx";
import {PhotoUpload} from "./components/PhotoUpload.jsx";
import {Categories} from "./components/Categories.jsx";



export function MakerAccount() {
    return (
        <>
        <section>
            <Container className="maker-account-form">
                <Row>
                    <Col>
                        <UserName />
                    </Col>
                    <Col xs={5}>
                        <Row>
                            <Col>
                                <AboutMe />
                            </Col>
                            <Col>
                                <Pricing />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Categories />
                    </Col>

                    <Col>
                        <Container>
                            <PhotoUpload />
                        </Container>
                        <Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="light" type="submit" size="lg">
                                    Submit Changes
                                </Button>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

            </Container>
        </section>
        </>
    )
}
