import React from "react";
import {Button, Container, Form} from "react-bootstrap";

export function Search() {
    return (
        <>
            <Container fluid className='d-flex ms-auto justify-content-center m-5'>
                <Form className='d-flex ' role="search">
                    <Form.Group>
                        <Form.Control type="search" placeholder="Search" aria-label="Search"/>
                    </Form.Group>
                    <Button className='mx-2' type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}