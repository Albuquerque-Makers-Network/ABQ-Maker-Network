import React from "react";
import * as Yup from 'yup'
import {Formik} from "formik";
import {httpConfig} from "../shared/utils/httpconfig.js";
import {Form, InputGroup, Col, Button} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {FormDebugger} from "../shared/FormDebugger.jsx";

export const SkillToggleForm = (props) => {

    const {profile, allskills} = props

    const initialvalues = {
        makerSkillIds: []

    }

    function submitEditedMakerProfile (values, { resetForm, setStatus }) {

        const submitUpdatedMakerSkills = (updatedMakerSkill) => {
            httpConfig.post(`/apis/maker-skill/`, updatedMakerSkill)
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
        <Formik initialValues={initialvalues} onSubmit={submitEditedMakerProfile}>
            {(props)=> {
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
                            <Form onSubmit={handleSubmit}>
                                {allskills.map(skill=>(
                                    <Form.Group controlId = "">
                                    <InputGroup className="py-1">
                                        <Form.Check
                                            inline label={skill.skillType}
                                            name="makerSkillIds"
                                            type="switch"
                                            id={"skillType"}
                                            value={skill.skillId}
                                            onChange = { handleChange }
                                            onBlur = { handleBlur }
                                        />
                                    </InputGroup>
                                    {/*<DisplayError errors={errors} touched={touched} field={"profileIsMaker"}/>*/}
                                </Form.Group>))}
                                <Form.Group className="d-flex justify-content-center">
                                    <Button id="sign-up-submit"
                                            variant="light"
                                            type="Submit"
                                            className="mb-3 fw-bold border border-dark border-2">Submit</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        {/*<FormDebugger className="bg-dark" props={ props }/>*/}
                    </>
                )
            }
            }
        </Formik>


    )

}

function skillToggleContent(props) {

}