import React from "react"
import {Col, Button, Image} from "react-bootstrap";
import "../LandingPage.css"


export function SkillIcons(props) {
    const {popularSkills} = props

    return (
        <>
            <Col xs={3} md={2} lg={1} className='text-center p-1'>
                <Button type='submit' className='bg-transparent border-0'><Image fluid src={popularSkills.skillIconUrl} alt='Icon of a vase' width='100'/></Button>
                <p>{popularSkills.skillType}</p>
            </Col>
        </>
    )
}