import React from "react"
import {Button, Container} from "react-bootstrap";
import "./App.css"

export const FourOhFour = () => {
    return (
        <>
            <Container className='my-5' id='error'>
                <Container fluid id='error-content'>
                    <h1 id='fourOHfour'>404</h1>
                    <h1>This is not the page you were looking for</h1>
                    <Button className='my-3' href="/" variant="light">Go Back Home</Button>
                </Container>
            </Container>
        </>
    )
};