import React from 'react';
import {Container, Form} from "react-bootstrap";

export function Pricing () {
    return (
        <>
            <Container className="bg-light border mt-5 rounded-4">
                <h1 className="text-center pt-3">Pricing</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Takea little time to explain your pricing structure...</Form.Label>
                        <Form.Control as="textarea" rows={10} size="lg" />
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}



