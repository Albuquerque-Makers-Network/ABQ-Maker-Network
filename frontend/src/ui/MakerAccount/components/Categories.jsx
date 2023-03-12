import React from 'react';
import {Col, Container, Row, Form, Stack} from "react-bootstrap";
import "../MakerAccount.css"

export function Categories() {
    return (
        <>
            <Container id='category-container' className="mt-5 mb-4 rounded-4 px-4 pb-4">
                <h2 className="text-center pt-3">Categories / Skills</h2>
                    <Stack direction="horizontal" gap={5}>
                        <div>
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
                        <div>

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

