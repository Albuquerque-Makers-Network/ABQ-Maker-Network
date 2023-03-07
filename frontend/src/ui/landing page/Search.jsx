import React from "react";
import {Button, Col, Row, Container, Dropdown, DropdownButton, Form} from "react-bootstrap";
import './LandingPage.css'

export function Search() {
    return (
        <>
            <Container fluid className="p-0">
            <Row>
                <Col sm={10}>
                    <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                            <Button variant="primary">Search</Button>
                    </Form>
                </Col>
                <Col sm={2}>
                    <DropdownButton id="dropdown-button" title="All Skills">
                            <Dropdown.Item>Skill</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            </Container>
        </>
    )
}