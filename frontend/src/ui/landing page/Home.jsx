import React from "react"
import {Search} from "./Search.jsx";
import {SkillIcons} from "./SkillIcons"
import {ProfileCards} from "./ProfileCards.jsx";
import {Container} from "react-bootstrap";

export function Home() {
    return (
        <>
            <h2 className="text-center my-5">Welcome to the ABQ Maker Network!</h2>
            <Container className="my-5">
                <h3 className="my-3">Ready to start collaborating with others?</h3>
                <Search/>
            </Container>

            <Container className="my-5">
                <h4 className="my-3">Popular Skills</h4>
                <SkillIcons/>
            </Container>

            <Container className="my-5">
            <ProfileCards/>
            </Container>
        </>
    )
}