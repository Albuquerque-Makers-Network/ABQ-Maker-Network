import React from "react";
import {Button, Col, Row, Container, Form, DropdownButton} from "react-bootstrap";
import '../../LandingPage.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSkills} from "../../../../store/skills.js";
import {SkillDropDown} from "./SkillDropDown.jsx";

export const Search = (props) => {

const {allSkills} = props

    return (
        <>
            <Container fluid className="p-0">
            <Row>
                <Col sm={10}>
                    <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                            <Button id='search-button' variant="outline-light">Search</Button>
                    </Form>
                </Col>
                <Col sm={2}>
                    <DropdownButton variant="outline-light" id="dropdown-button" title="All Skills">
                        {allSkills.map(allSkills => <SkillDropDown allSkills={allSkills} key={allSkills.skillId}/>)}
                    </DropdownButton>
                </Col>
            </Row>
            </Container>
        </>
    )
}