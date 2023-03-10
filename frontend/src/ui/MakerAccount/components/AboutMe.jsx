import React from 'react';
import {Container, Form} from "react-bootstrap";

export function AboutMe () {
    return (
        <>
            <Container className="bg-light border mt-5 mx-auto rounded-4">
                <h1 className="text-center pt-3">About Me</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Take a little time to talk about your skills...</Form.Label>
                        <Form.Control as="textarea" rows={10} size="lg"/>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}


