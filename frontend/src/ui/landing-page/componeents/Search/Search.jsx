import React from "react";
import {Button, Col, Row, Container, Form, DropdownButton} from "react-bootstrap";
import '../../LandingPage.css'
import {SkillDropDown} from "./SkillDropDown.jsx";

export const Search = () => {


    return (
        <>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button id='search-button' variant="outline-light">Search</Button>
            </Form>

        </>
    )
}