import React from "react";
import {Dropdown} from "react-bootstrap";

export function SkillDropDown(props) {
    const {allSkills} = props
    return (
        <>
            <Dropdown.Item>{allSkills.skillType}</Dropdown.Item>
        </>
    )
}