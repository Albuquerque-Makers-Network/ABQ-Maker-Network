import React from "react";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import '../../LandingPage.css'
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import {DisplayStatus} from "../../../shared/components/display-status/display-status.jsx";
import {DisplayError} from "../../../shared/components/display-error/DisplayError.jsx";
import * as Yup from "yup";
import {fetchProfileByKeyword} from "../../../../store/profiles.js";


export const Search = () => {

    const searchResults = {
        searchKeyword: "",
    };

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        searchKeyword: Yup.string()
            .required("Please enter a keyword to search by.")
            .min(1, "A search keyword must be at least one character."),
    });

    const submitSearch = (values, {resetForm}) => {
        dispatch (fetchProfileByKeyword(values.searchKeyword))
        resetForm()
    }

    // can add set status to fetch function if wanted

    return(
        <Formik initialValues={searchResults} onSubmit={submitSearch} validationSchema={validator}>
            {SearchContent}
        </Formik>
    )

}


function SearchContent(props){

    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return(
        <>
            <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Group className='w-100'>
                    {/*min-width: 43rem;*/}
                    <InputGroup>
                        <Form.Control
                            className="form-control"
                            // className="me-2"
                            name='searchKeyword'
                            type='text'
                            values={values.searchKeyword}
                            placeholder="Search by Maker Info"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"searchKeyword"}/>
                </Form.Group>
                <Form.Group className='ms-4'>
                    <Button id='search-button' type='submit' variant="outline-light">Search</Button>
                </Form.Group>
            </Form>
            <Container>
                <DisplayStatus status={status}/>
            </Container>
        </>
        )
}