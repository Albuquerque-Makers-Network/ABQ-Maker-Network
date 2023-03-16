import React from "react"
import {Col, Button, Image} from "react-bootstrap";
import "../LandingPage.css"
import {fetchProfileBySkillId} from "../../../store/profileFilters.js";
import {useDispatch, useSelector} from "react-redux";
import {ProfileCards} from "./ProfileCards.jsx";


export function SkillIcons(props) {

    const {popularSkills} = props

    // const allProfiles = useSelector(state => {
    //     if (state?.profiles.constructor.name === "Object")
    //     {
    //         return Object.values(state.profiles)
    //     } else []
    // })
    //
    //
    function handleClick() {
        alert('you clicked this!')

    //     const dispatch = useDispatch()
    //     const initialEffect = () => {
    //         dispatch ( fetchProfileBySkillId(allProfiles) )
    //     }
    //
    //     React.useEffect (initialEffect, [])
    }

    return (
        <>
            <Col xs={3} md={2} lg={1} className='text-center p-1'>
                <Button onClick={handleClick} type='submit' className='bg-transparent border-0'><Image fluid src={popularSkills.skillIconUrl} width='100'/></Button>
                <p>{popularSkills.skillType}</p>
            </Col>
        </>
    )
}