import React from "react";
import * as Yup from 'yup'
import {Formik} from "formik";
import {httpConfig} from "../shared/utils/httpconfig.js";
import {Form, InputGroup, Col} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";

export const SkillToggleForm = (props) => {

    const {profile, allskill} = props

    const skillToggleInitialValues = {
        profile,
        allskill
    }

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

    return (
        <Formik initialValues={skillToggleInitialValues} onSubmit={submitEditedMakerProfile}>
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

    console.log("this is:", values)

    return(
        <>
            <Col className='p-0, my-0' xs={6} lg={4}>
                    <Form>
                        <Form.Group controlId = "">
                            <InputGroup className="py-1">
                                    <Form.Check
                                        inline label={values.allskill.skillType}
                                        name="skillType"
                                        type="switch"
                                        id={"skillType"}
                                        value={values.allskill.skillId}
                                        onChange = { handleChange }
                                        onBlur = { handleBlur }
                                    />

                                {/*<Form.Check inline label="Community Member" name="profileIsMaker" type={"radio"} id={"profileIsMaker"} value={false} onChange = { handleChange } onBlur = { handleBlur } defaultChecked={values.profileIsMaker === false}/>*/}
                            </InputGroup>
                            {/*<DisplayError errors={errors} touched={touched} field={"profileIsMaker"}/>*/}
                        </Form.Group>
                    </Form>
            </Col>
        </>
    )
}