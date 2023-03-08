import React from "react"
import {Search} from "./Search.jsx";
import {SkillIcons} from "./SkillIcons"
import {ProfileCards} from "./ProfileCards.jsx";
import {Container, Image, Row, Col} from "react-bootstrap";
import Logo from "../../assets/maker-network-logo.png";

export function Home() {
    return (
        <>
            <section id='intro'>
                <Container id='intro-content'>
                    <Container  className='text-center my-3'>
                    <Image className="me-4" fluid src={Logo} alt='image of ABQ Maker Network logo. Text reads ABQ Maker Network.' width='150rem'/>
                    <h2 className="text-center my-5">Welcome to the ABQ Maker Network!</h2>
                    </Container>

                    <Container className="my-5 mx-auto px-md-0 px-4">
                        <h3 className="my-3">Ready to start collaborating with others?</h3>
                        <p>Start searching by maker information or skill type.</p>
                        <Search/>
                    </Container>
                </Container>
            </section>
            <section>
                <Container className="my-5 mx-auto px-md-0 px-4">
                    <h4 className="my-3">Popular Skills</h4>
                    <SkillIcons/>
                </Container>
            </section>
            <section>
                <Container className="my-5 mx-auto px-md-0 px-4">
                    <ProfileCards/>
                </Container>
            </section>
        </>
    )
}