import React from "react";
import {Button, Col, Row, Container, Dropdown, DropdownButton, Form} from "react-bootstrap";

export function Search() {
    return (
        <>
            <Row>
                <Col lg={11}>
                    <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                            <Button variant="primary">Search</Button>
                    </Form>
                </Col>
                <Col lg={1}>
                    <DropdownButton title="All Skills">
                            <Dropdown.Item>Skill</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </>
    )
}