import React from "react";
import * as Yup from 'yup'
import {Formik} from "formik";
import {httpConfig} from "../shared/utils/httpconfig.js";
import {Form, InputGroup, Col} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";

export const SkillToggleForm = (props) => {

    const {profile, allskill} = props

    function submitEditedMakerProfile (values, { resetForm, setStatus }) {

        const submitUpdatedMakerSkills = (updatedMakerSkill) => {
            httpConfig.put(`/apis/maker-skill/${profile.profileId}/${allskill.skillId}`, updatedMakerSkill)
                .then(reply => {
                    let {message, type} = reply
                    if (reply.status === 200) {
                        resetForm()
                    }
                    setStatus({message, type})
                    return (reply)
                })
        }
        {submitUpdatedMakerSkills(values)}
    }

    // /:makerSkillMakerProfileId/:makerSkillId

    return (
        <Formik initialValues={allskill} onSubmit={submitEditedMakerProfile}>
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
            <Col className='p-0, my-0' xs={6} sm={4} lg={3}>
                    <Form>
                        <Form.Group className="" controlId = "">
                            <InputGroup className="">
                                    <Form.Check
                                        inline label="Skills"
                                        name="profileIsMaker"
                                        type="switch"
                                        id={"profileIsMaker"}
                                        value={true}
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