import React from 'react';
import {Col, Container, Row, Form, Stack} from "react-bootstrap";

export function Categories() {
    return (
        <>
            <Container className="bg-light border mt-5 mb-4 rounded-4">
                <h1 className="text-center pt-3">Categories/Skills</h1>
                    <Stack direction="horizontal" gap={5}>
                        <div className="bg-light">
                        <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="3d Printing"
                        />
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Ceramics"
                            />
                        </Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Jewelry"
                        />
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Metalworking"
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Printing"
                        />
                    </Form>
                        </div>
                        <div className="bg-light">

                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Screen Printing"
                    />

                        <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Sewing"
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Welding"
                        />
                    </Form>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Woodworking"
                    />
                </div>

                    </Stack>

            </Container>



        </>
    );
}

