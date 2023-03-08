import React from "react";
import {Container, Row, Col, Image, Button, Form} from "react-bootstrap";
import "../App.css";

export function MakerAccount() {
    return (
        <>
            {/*<Navigation /> (coming soon)*/}

        <section>
            <Container className="maker-account-form">
                <Row>
                    <Col>
                        <Image roundedCircle="image-fluid mx-auto d-block" src="https://jeopardygirl.files.wordpress.com/2007/04/happy-face-happyface-smiley-300x300.gif" />
                        <Form.Group className="mb-4 px-3">
                            <Form.Control type="name" placeholder="First Name"className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                            <Form.Text>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4 px-3">
                            <Form.Control type="username" placeholder="Username" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                            <Form.Text>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4 px-3">
                            <Form.Control type="password" placeholder="Password" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                            <Form.Text>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4 px-3">
                            <Form.Control type="name" placeholder="First Name" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                            <Form.Text>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4 px-3">
                            <Form.Control type="name" placeholder="Last Name" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                            <Form.Text>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4 px-3">
                            <Form.Control type="email" placeholder="Email" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                            <Form.Text>
                            </Form.Text>
                        </Form.Group>

                    </Col>
                    <Col xs={5}>
                        <Row>
                            <Col>
                                <Container className="bg-light border mt-5 rounded-4">
                                    <h1 className="text-center pt-3">About Me</h1>
                                    <p>Lorem ipsum dolor sit amet. Est placeat excepturi in esse esse eos provident totam et perferendis eveniet? Ut error eligendi est quasi dolor id quibusdam delectus non commodi natus qui autem quis. Quo sapiente galisum eos unde voluptas qui quia animi et quas repudiandae aut natus impedit in nulla quas? Ut omnis odio id ipsa voluptas rem animi consequuntur et omnis rerum cum eveniet voluptate ut quia iure ut sunt eaque.</p>
                                    <p>Ut error eligendi est quasi dolor id quibusdam delectus non commodi natus qui autem quis. Quo sapiente galisum eos unde voluptas qui quia animi et quas repudiandae aut natus impedit in nulla quas? Ut omnis odio id ipsa voluptas rem animi consequuntur</p>
                                </Container>
                            </Col>
                            <Col>
                                <Container className="bg-light border mt-5 rounded-4">
                                    <h1 className="text-center pt-3">Pricing</h1>
                                    <div>
                                        <ul>
                                            <li>$$$$$$$$$$$$$$</li>
                                            <li>$$$$$$$$$$$$$$</li>
                                            <li>$$$$$$$$$$$$$$</li>
                                            <li>$$$$$$$$$$$$$$</li>
                                            <li>$$$$$$$$$$$$$$</li>
                                            <li>$$$$$$$$$$$$$$</li>
                                            <li>$$$$$$$$$$$$$$</li>
                                            <li>$$$$$$$$$$$$$$</li>
                                            <li>$$$$$$$$$$$$$$</li>
                                        </ul>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Container className="bg-light border mt-5 mb-4 rounded-4">
                            <h1 className="text-center pt-3">Categories/Skills</h1>
                            <Row>
                                <Col>1 of 3</Col>
                                <Col>2 of 3</Col>
                                <Col>3 of 3</Col>
                            </Row>
                            <Row>
                                <Col>1 of 3</Col>
                                <Col>2 of 3</Col>
                                <Col>3 of 3</Col>
                            </Row>
                            <Row>
                                <Col>1 of 3</Col>
                                <Col>2 of 3</Col>
                                <Col>3 of 3</Col>
                            </Row>
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