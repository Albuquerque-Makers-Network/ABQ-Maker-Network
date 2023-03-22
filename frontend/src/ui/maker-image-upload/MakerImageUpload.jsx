import React from "react";
import {Container, Row, Col, Image, Button, Form} from "react-bootstrap";
import "../App.css";
import "./MakerImageUpload.css"
import {ImageUploadUpdate} from "./ImageUploadUpdate.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../store/currentUser";

export const MakerImageUpload= () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => {return state.currentUser ? state.currentUser : null})

    const sideEffects = () => {
    dispatch(fetchCurrentUser())
    }

    React.useEffect(sideEffects, [dispatch])
    return(
        <>
            <Container className='p-5'>
                <Row>
                    <Col>
                        {profile &&
                            <>
                                <ImageUploadUpdate profile={profile}/>
                            </>
                        }
                    </Col>

                </Row>
            </Container>
        </>
    )
};