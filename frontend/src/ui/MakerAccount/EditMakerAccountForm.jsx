import React from "react";
import * as Yup from "yup";
import {Field, Formik, useField} from "formik";
import {Button, Container, Image, Form, FormControl, InputGroup, Row, Col, Stack} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {DisplayStatus} from "../shared/components/display-status/display-status.jsx";
import {FormDebugger} from "../shared/FormDebugger.jsx";
import {httpConfig} from "../shared/utils/httpconfig.js";
import {useDropzone} from "react-dropzone";

export const EditMakerAccountForm = (props) => {

    const { profile } = props

    const validationObject = Yup.object().shape({
        profileFullName: Yup.string()
            .max ( 32, 'Input less than 32 characters' ),
        profileEmail: Yup.string()
            .email( 'Email must be a valid email' ),
        profileName: Yup.string()
            .max ( 64, 'Username cannot be more than 64 characters' ),
        // profileAboutMe: Yup.string()
        //     .max ( 350, 'About be me cannot be more than 350 characters' ),
        // profilePricing: Yup.string()
        //     .max ( 128, 'Profile pricing cannot be more than 128 characters'),
        profileImageUrl: Yup.mixed()
    })

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

        if (values.profileImageUrl !== undefined) {
            httpConfig.post(`/apis/image-upload/`, values.profileImageUrl)
                .then(reply => {
                let {message, type} = reply
                if (reply.status === 200) {
                    submitUpdatedProfile({...values, profileImageUrl: message})
                } else {
                    setStatus({message, type})
                    }
                }
            )
        } else {
            submitUpdatedProfile(values)
        }
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

    return (
        <>
            <Container className="maker-account-form">
                <Form onSubmit={handleSubmit}>
                <Row id='primary-content'>
                    <Col sm={12} lg={4}>
                        <Container id='user-name-setting' className="mt-5 mx-auto rounded-4 p-3">
                            <h2 className="text-center pt-3">User Info</h2>
                            <Image fluid roundedCircle src={values.profileImageUrl} alt="profile picture" className="d-block mx-auto mt-5 mb-3" id="profile-image"/>
                            <Form.Group className="mb-4 px-3" controlId="fullName">
                                <Form.Label>Full Name</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                    </InputGroup.Text>
                                    <FormControl
                                    className="form-control"
                                    name="fullName"
                                    type="text"
                                    value={values.profileFullName}
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={'profileFullName'}/>
                            </Form.Group>
                            <Form.Group className="mb-4 px-3" controlId="profileEmail">
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
                            <Form.Group className="mb-4 px-3" controlId="userName">
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                    </InputGroup.Text>
                                    <FormControl
                                    className="form-control"
                                    name="userName"
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
                            <Col xs={12} lg={6}>
                                <Container id='about-me-setting' className="mt-5 mx-auto rounded-4 p-3">
                                    <h2 className="text-center pt-3">About Me</h2>
                                    <Form.Group className="mb-4 px-3" controlId="aboutMe">
                                    <Form.Label></Form.Label>
                                    <InputGroup>
                                        <FormControl
                                        className="form-control"
                                        name="aboutMe"
                                        as="textarea"
                                        rows={10}
                                        size='lg'
                                        defaultValue={values.profileAboutMe}
                                        placeholder="Write a little something about yourself..."
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    </InputGroup>
                                    <DisplayError errors={errors} touched={touched} field={'aboutMe'}/>
                                    </Form.Group>
                                </Container>
                            </Col>
                    {/*            <Col xs={12} lg={6}>*/}
                    {/*                <Container id='price-setting' className="mt-5 mx-auto rounded-4 p-3">*/}
                    {/*                <h2 className="text-center pt-3">Pricing</h2>*/}
                    {/*                <Form.Group className="mb-4 px-3" controlId="pricing">*/}
                    {/*                <Form.Label></Form.Label>*/}
                    {/*                <InputGroup>*/}
                    {/*                    <FormControl*/}
                    {/*                    className="form-control"*/}
                    {/*                    name="pricing"*/}
                    {/*                    as="textarea"*/}
                    {/*                    rows={10}*/}
                    {/*                    size='lg'*/}
                    {/*                    defaultValue={values.profilePricing}*/}
                    {/*                    placeholder="Let us know your pricing structure."*/}
                    {/*                    onChange={handleChange}*/}
                    {/*                    onBlur={handleBlur}*/}
                    {/*                    />*/}
                    {/*                </InputGroup>*/}
                    {/*                <DisplayError errors={errors} touched={touched} field={'pricing'}/>*/}
                    {/*                </Form.Group>*/}
                    {/*                </Container>*/}
                    {/*            </Col>*/}
                                    <Col xs={12}>
                                        <Container id='category-container' className="mt-5 mb-4 rounded-4 px-4 pb-4">
                                            <h2 className="text-center pt-3">Categories / Skills</h2>
                                            <Form>
                                                <Stack direction="horizontal" gap={5}>
                                                <div>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-1"
                                                    name="3d-printing"
                                                    label="3d Printing"
                                                />
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-2"
                                                    name="ceramics"
                                                    label="Ceramics"
                                                />
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-3"
                                                    name="jewelry"
                                                    label="Jewelry"
                                                />
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-4"
                                                    name="metalworking"
                                                    label="Metalworking"
                                                />
                                                </div>
                                                <div>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-5"
                                                    name="printing"
                                                    label="Printing"
                                                />
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-6"
                                                    name="screen-printing"
                                                    label="Screen Printing"
                                                />
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-7"
                                                    name="sewing"
                                                    label="Sewing"
                                                />
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-8"
                                                    name="welding"
                                                    label="Welding"
                                                />
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch-9"
                                                    name="woodworking"
                                                    label="Woodworking"
                                                />
                                                </div>
                                                </Stack>
                                            </Form>
                                        </Container>
                                </Col>
                        </Row>
                    </Col>
                </Row>
                <Container id='category-container' className="mt-5 mb-4 rounded-4 px-4 pb-4">
                        <h2 className="text-center pt-3">Upload Profile Image</h2>
                    <ImageDropZone
                        formikProps={{
                            values,
                            handleChange,
                            handleBlur,
                            setFieldValue,
                            fieldValue: 'profileImageUrl'
                        }}
                    />
                </Container>
                    <Form.Group className={"mt-3"}>
                        <Button variant="light" type="submit" className='m-2 btn btn-danger mb-3 fw-bold border border-dark border-2'
                        >Submit changes</Button>
                        {''}
                        <Button
                            className='m-2 btn btn-danger mb-3 fw-bold border border-dark border-2'
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >Reset</Button>
                        </Form.Group>
                </Form>
            </Container>
            <DisplayStatus status={status}/>

            <FormDebugger {...props} />
        </>
    )
}

function ImageDropZone ({ formikProps }) {

    const onDrop = React.useCallback(acceptedFiles => {

        const formData = new FormData()
        formData.append('image', acceptedFiles[0])

        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <Form.Group className={"mb-3"} {...getRootProps()}>
            <Form.Label>User Image</Form.Label>

            <InputGroup size="lg" className="">
                {
                    formikProps.values.profileImageUrl &&
                    <>
                        <div className="bg-transparent m-0">
                            <Image  fluid={true} maxHeight={250} rounded={true} thumbnail={true} width={100} alt="profile pic" src={formikProps.values.profileImageUrl} />
                        </div>

                    </>
                }
                <div className="d-flex flex-fill bg-light justify-content-center align-items-center border rounded">
                    <FormControl
                        aria-label="profile avatar file drag and drop area"
                        aria-describedby="image drag drop area"
                        className="form-control-file"
                        accept="image/*"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        {...getInputProps()}
                    />
                    {
                        isDragActive ?
                            <span className="align-items-center" >Drop image here</span> :
                            <span className="align-items-center" >Drag and drop image here, or click here to select an image</span>
                    }
                </div>

            </InputGroup>
        </Form.Group>
    )
}



