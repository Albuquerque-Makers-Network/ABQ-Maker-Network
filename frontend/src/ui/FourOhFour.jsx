import React from "react"
import {Button, Container, Row, Col, Image} from "react-bootstrap";
import "./App.css"
import fourOhFour from "../assets/fourOhFour-gear.svg";

export const FourOhFour = () => {
    return (
        <>
                <Container className='text-center my-5'>
                    <Row >
                        <Col xs={12}>
                            <Image id='pageError' fluid src={fourOhFour} alt='404 this is not the page you were looking for'/>
                        </Col>
                        <Col className='m-auto' xs={12}>
                            <Button className='my-5' href="/" variant="dark">Go Back Home</Button>
                        </Col>
                    </Row>
                </Container>
        </>
    )
};