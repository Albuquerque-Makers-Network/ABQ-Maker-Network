import React from "react";
import * as Yup from 'yup'
import {Formik} from "formik";
import {httpConfig} from "../shared/utils/httpconfig.js";
import {Form, InputGroup, Col} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";

export const SkillToggleForm = (props) => {

    const {profile, allskill} = props

    function submitEditedProfile (values, { resetForm, setStatus }) {

        const submitUpdatedProfile = (updatedProfile) => {
            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let {message, type} = reply
                    if (reply.status === 200) {
                        resetForm()
                    }
                    setStatus({message, type})
                    return (reply)
                })
        }
        {submitUpdatedProfile(values)}
    }


    return (
        <Formik initialValues={allskill} onSubmit={submitEditedProfile}>
            {skillToggleContent}
        </Formik>
    )
}

function skillToggleContent(props) {

    const {
        setFieldValue,
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props

    const {allskill} = props

    return(
        <>
            <Col className='p-0, my-0' lg={3}>
                    <Form>
                        <Form.Group className="" controlId = "">
                            <InputGroup className="">
                                    <Form.Check
                                        inline label="Skills"
                                        name="profileIsMaker"
                                        type="switch"
                                        id={"profileIsMaker"}
                                        // value={false}
                                        onChange = { handleChange }
                                        onBlur = { handleBlur }
                                    />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={"profileIsMaker"}/>
                        </Form.Group>
                    </Form>
            </Col>
        </>
    )
}