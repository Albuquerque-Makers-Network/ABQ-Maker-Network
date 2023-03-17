import React from "react";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import '../../LandingPage.css'
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import {DisplayStatus} from "../../../shared/components/display-status/display-status.jsx";
import {DisplayError} from "../../../shared/components/display-error/DisplayError.jsx";
import * as Yup from "yup";


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

    const submitSearch = (values, {resetForm, setStatus}) => {

    }

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
                <Form.Group>
                    {/*min-width: 43rem;*/}
                    <InputGroup>
                        <Form.Control
                            className="form-control"
                            // className="me-2"
                            name='searchKeyword'
                            type='text'
                            values={values.searchKeyword}
                            placeholder="Search for a Maker Here"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"searchKeyword"}/>
                </Form.Group>
                <Form.Group className='ms-2'>
                    <Button id='search-button' type='submit' variant="outline-light">Search</Button>
                </Form.Group>
            </Form>
            <Container>
                <DisplayStatus status={status}/>
            </Container>
        </>
        )


}