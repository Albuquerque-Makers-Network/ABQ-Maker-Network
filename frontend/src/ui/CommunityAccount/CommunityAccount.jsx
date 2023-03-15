import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import "./CommunityAccount.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../store/currentUser";
import { EditCommunityAccountForm } from "./EditCommunityAccountForm";
export const CommunityAccount = () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state.auth ? state.auth : null)

    const sideEffects = () => {
        dispatch(fetchCurrentUser())
    }

    React.useEffect(sideEffects, [dispatch])
    return (

        <>
          <section>
            <Container id="community-account" className="mt-5 rounded-4 border border-dark border-3">
                {profile &&
                    <>
                    <EditCommunityAccountForm profile={profile}/>
                    </>
                }
            </Container>
            </section>
        </>
    )
};

