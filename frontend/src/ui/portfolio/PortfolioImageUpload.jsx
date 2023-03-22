import React from "react";
import {Container, Row, Col, Image, Button, Form} from "react-bootstrap";
import "../App.css";
import "./PortfolioImageUpload.css"
import {PortfolioImageUploadUpdate} from "./PortfolioImageUploadUpdate.jsx";
import { useDispatch, useSelector } from "react-redux";
import currentUser, { fetchCurrentUser } from "../../store/currentUser";
import portfolios, {fetchPortfolioByProfileId} from "../../store/portfolios.js";
import {PortfolioImage} from "../maker-profile/components/PortfolioImage.jsx";
import {useParams} from "react-router-dom";

export const PortfolioImageUpload = () => {
let selectedProfileId = useParams()
    const profileId = selectedProfileId.profileId
    const dispatch = useDispatch()
    const profile = useSelector(state => {return state.currentUser ? state.currentUser : null})

    const sideEffects = () => {
    dispatch(fetchCurrentUser())
        dispatch(fetchPortfolioByProfileId(profileId))
    }
    React.useEffect(sideEffects, [dispatch])
    const portfolios = useSelector(state => {
        if (state?.portfolios.constructor.name === "Object") {
            return Object.values(state.portfolios)
        } else {
            return null
        }
    })

    const renderedPortfolios = (portfolios) => {
        if (portfolios === null) {
            return (<h5> No portfolios to display </h5>)
        } else {
            return (portfolios.map(portfolio => <PortfolioImageUploadUpdate profile={profile} portfolio={portfolio}/>))
        }
    }


    return(
        <>
            <Container className='p-5'>
                <Row>
                    <Col>
                        {profile &&
                            <>
                                {renderedPortfolios(portfolios)}
                            </>
                        }
                    </Col>

                </Row>
            </Container>
        </>
    )
};