import React from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {Button, Container, Image, Form, FormControl, InputGroup, Row, Col, Alert} from "react-bootstrap";
import {DisplayError} from "../../shared/components/display-error/DisplayError.jsx";
import {DisplayStatus} from "../../shared/components/display-status/display-status.jsx";
import {FormDebugger} from "../../shared/FormDebugger.jsx";
import {httpConfig} from "../../shared/utils/httpconfig.js";

export const EditMakerAccountForm = (props) => {

    const { profile } = props

    const validationObject = Yup.object().shape({
        profileFullName: Yup.string()
            .max ( 32, 'Input less than 32 characters' ),
        profileEmail: Yup.string()
            .email( 'Email must be a valid email' ),
        profileName: Yup.string()
            .max ( 64, 'Username cannot be more than 64 characters' ),
        profileAboutMe: Yup.string()
            .max ( 350, 'About be me cannot be more than 350 characters' )
            .nullable(),
        profilePricing: Yup.string()
            .max ( 128, 'Profile pricing cannot be more than 128 characters')
            .nullable()
    })

    function submitEditedProfile (values, { setStatus }) {

        const submitUpdatedProfile = (updatedProfile) => {
            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let {message, type} = reply
                    if (reply.status === 200) {
                        window.location.reload()
                    }
                    setStatus({message, type})
                    return (reply)
                })
        }
        {submitUpdatedProfile(values)}
    }

    return (
        <Formik
            initialValues={profile}
            onSubmit={submitEditedProfile}
            validationSchema={validationObject}
        >
            {EditProfileFormContent}
        </Formik>
    )

}

function EditProfileFormContent (props) {
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
        handleReset

    } = props

    const handleProfileClick = () => {
        window.location.replace('/maker-image-upload')
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <Container id="user-info-setting" className="rounded-4 p-sm-5">
                    <h2 className='text-center pb-3'>My Profile</h2>
                <Row id='primary-content'>
                    <Col sm={12} lg={4}>
                        <Container id='user-name-setting' className="mt-2 mx-auto rounded-4 p-3">
                            <h2 className="text-center pt-3">User Info</h2>
                                <Image fluid roundedCircle src={values.profileImageUrl} alt="profile picture" className="d-block mx-auto mt-5 mb-3" id="profile-image"/>
                                <a href='/maker-image-upload'><h6 className=" text-dark text-center">Update Profile Photo HERE</h6></a>
                                <Form.Group className="my-4 mb-4 px-3 fw-bold" controlId="profileFullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <InputGroup>
                                        <FormControl
                                        className="form-control"
                                        name="profileFullName"
                                        type="text"
                                        value={values.profileFullName}
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    </InputGroup>
                                    <DisplayError errors={errors} touched={touched} field={'profileFullName'}/>
                                </Form.Group>
                                <Form.Group className="mb-4 px-3 fw-bold" controlId="profileEmail">
                                    <Form.Label>Update your e-mail address</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                        </InputGroup.Text>
                                        <FormControl
                                        className="form-control"
                                        name="profileEmail"
                                        type="text"
                                        value={values.profileEmail}
                                        placeholder="you@email.com"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    </InputGroup>
                                    <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
                                </Form.Group>
                                <Form.Group className="mb-4 px-3 fw-bold" controlId="profileName">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                        </InputGroup.Text>
                                        <FormControl
                                        className="form-control"
                                        name="profileName"
                                        type="text"
                                        value={values.profileName}
                                        placeholder="User Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    </InputGroup>
                                    <DisplayError errors={errors} touched={touched} field={'userName'}/>
                                </Form.Group>
                            </Container>
                        </Col>
                        <Col sm={12} lg={8}>
                            <Row>
                                <Col xs={12}>
                                    <Container id='about-me-setting' className="mt-2 mx-auto rounded-4 p-3">
                                        <h2 className="text-center pt-3">About Me</h2>
                                        <Form.Group className="mb-4 px-3" controlId="profileAboutMe">
                                        <Form.Label></Form.Label>
                                        <InputGroup>
                                            <FormControl
                                            className="form-control"
                                            name="profileAboutMe"
                                            as="textarea"
                                            rows={8}
                                            size='lg'
                                            value={values.profileAboutMe}
                                            placeholder="Write a little something about yourself..."
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            />
                                        </InputGroup>
                                        <DisplayError errors={errors} touched={touched} field={'profileAboutMe'}/>
                                        </Form.Group>
                                    </Container>
                                </Col>
                                    <Col xs={12}>
                                        <Container id='price-setting' className="mt-2 mx-auto rounded-4 p-3">
                                        <h2 className="text-center pt-3">Pricing</h2>
                                        <Form.Group className="mb-4 px-3" controlId="profilePricing">
                                        <Form.Label></Form.Label>
                                        <InputGroup>
                                            <FormControl
                                            className="form-control"
                                            name="profilePricing"
                                            as="textarea"
                                            rows={4}
                                            size='lg'
                                            defaultValue={values.profilePricing}
                                            placeholder="Let us know your pricing structure."
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            />
                                        </InputGroup>
                                        <DisplayError errors={errors} touched={touched} field={'profilePricing'}/>
                                        </Form.Group>
                                        </Container>
                                    </Col>
                            </Row>
                        </Col>
                    </Row>
                        <Form.Group className={"mt-3 text-center"}>
                            <Button variant="light"
                                    type="submit"
                                    className='m-2 btn btn-danger mb-3 fw-bold border border-dark border-2'
                                    onClick={handleSubmit}
                            >Submit Profile Changes</Button>
                            </Form.Group>
                </Container>
                </Form>
            <DisplayStatus status={status}/>

            {/*<FormDebugger {...props} />*/}
        </>
    )
}


