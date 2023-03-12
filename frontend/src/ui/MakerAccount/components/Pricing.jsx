import React from 'react';
import {Container, Form} from "react-bootstrap";
import "../MakerAccount.css"

export function Pricing () {
    return (
        <>
            <Container id='pricing-setting' className="mt-5 rounded-4 p-3">
                <h2 className="text-center pt-3">Pricing</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Take a little time to explain your pricing structure...</Form.Label>
                        <Form.Control as="textarea" rows={10} size="lg" />
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}



