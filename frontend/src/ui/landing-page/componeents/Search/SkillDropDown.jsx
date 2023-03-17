import React from "react";
import {Dropdown} from "react-bootstrap";

export function SkillDropDown(props) {

    const {allskill, filterProfilesBySkill} = props

    function handleClick() {

        filterProfilesBySkill(allskill.skillId)

    }

    return (
        <>
            <Dropdown.Item onClick={handleClick}>
                {allskill.skillType}
            </Dropdown.Item>
        </>
    )
}