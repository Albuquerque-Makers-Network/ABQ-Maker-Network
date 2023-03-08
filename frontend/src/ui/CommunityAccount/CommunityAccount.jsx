import React from "react";
import {Container, Form, Button} from "react-bootstrap";
import "../App.css"

export function CommunityAccount() {
    return (
        <>
            {/*<Navigation /> (coming soon)*/}

        <section>
            <Container className="community-account-form">
                <h1 className="text-center pt-3 mb-4">Community Account</h1>
                <Form.Group className="mb-4 px-3">
                    <Form.Control type="name" placeholder="First Name"className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                    <Form.Text>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-4 px-3">
                    <Form.Control type="name" placeholder="Last Name" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                    <Form.Text>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-4 px-3">
                    <Form.Control type="email" placeholder="E-mail" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
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
                <Form.Group className="d-flex justify-content-center">
                    <Button variant="light" type="submit" size="lg">Submit changes</Button>
                </Form.Group>
            </Container>
        </section>
        </>
    )
}

