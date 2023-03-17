import React from "react";
import {Button, Form} from "react-bootstrap";
import '../../LandingPage.css'

export const Search = () => {
    // let history = useHistory();
    //
    // const searchResults = {
    //     searchKeyword: "",
    // };
    //
    // const dispatch = useDispatch()
    // const validator = Yup.object().shape({
    //     searchKeyword: Yup.string()
    //         .required("Please enter a keyword to search by.")
    //         .min(1, "A search keyword must be at least one character."),
    // });

    return (
        <>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button id='search-button' variant="outline-light">Search</Button>
            </Form>
        </>
    )
}