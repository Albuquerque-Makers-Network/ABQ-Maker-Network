import React from "react"
import {Col, Button, Image} from "react-bootstrap";
import "../LandingPage.css"


export function SkillIcons(props) {

    const {popularSkill, filterProfilesBySkill} = props

    function handleClick() {

        filterProfilesBySkill(popularSkill.skillId)

    }

    return (
        <>
            <Col onClick={handleClick} xs={3} md={2} lg={1} className='text-center p-1'>
                <Image fluid src={popularSkill.skillIconUrl} width='100'/>
                <p>{popularSkill.skillType}</p>
            </Col>
        </>
    )
}