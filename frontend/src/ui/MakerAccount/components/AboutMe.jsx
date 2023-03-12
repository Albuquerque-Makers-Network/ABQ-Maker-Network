import React from 'react';
import {Container, Form} from "react-bootstrap";
import "../MakerAccount.css"

export function AboutMe () {
    return (
        <>
            <Container id='about-me-setting' className="mt-5 mx-auto rounded-4 p-3">
                <h2 className="text-center pt-3">About Me</h2>
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


