import React from "react";
import {Container, Form, Button} from "react-bootstrap";
import "../App.css"
import "./CommunityAccount.css"

export function CommunityAccount() {
    return (
        <>
            {/*<Navigation /> (coming soon)*/}

        <section>
            <Container id="community-account" className="mt-5 rounded-4 border border-dark border-3">
                <h1 className="text-center text-light py-5">Account Settings</h1>
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
                    <Button variant="light" type="submit" className="mb-3">Submit changes</Button>
                </Form.Group>
            </Container>
        </section>
        </>
    )
}

