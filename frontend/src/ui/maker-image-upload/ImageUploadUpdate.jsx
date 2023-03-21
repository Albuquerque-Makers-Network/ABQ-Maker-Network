import React from "react";
import * as Yup from "yup";
import {Field, Formik, useField} from "formik";
import {Button, Container, Image, Form, FormControl, InputGroup, Row, Col, Stack} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {DisplayStatus} from "../shared/components/display-status/display-status.jsx";
import {FormDebugger} from "../shared/FormDebugger.jsx";
import {httpConfig} from "../shared/utils/httpconfig.js";
import {useDropzone} from "react-dropzone";


export const ImageUploadUpdate = (props) => {
    const { profile } = props

    const validationObject = Yup.object().shape({
        profileAvatarUrl: Yup.mixed(),
        profileAtHandle: Yup.string()
            .min(1, 'profile @handle is to long.')
    })

    function submitEditedProfile (values, { resetForm, setStatus }) {

        const submitUpdatedProfile = (updatedProfile) => {
            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let { message, type } = reply

                    if (reply.status === 200) {
                        resetForm()
                    }
                    setStatus({ message, type })
                    return (reply)
                })
        }

        if (values.profileAvatarUrl !== undefined) {
            httpConfig.post(`/apis/image-upload/`, values.profileAvatarUrl)
                .then(reply => {
                        let { message, type } = reply

                        if (reply.status === 200) {
                            submitUpdatedProfile({ ...values, profileAvatarUrl: message })
                        } else {
                            setStatus({ message, type })
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
        <Container className="maker-image-upload">
                {/*<Form onSubmit={handleSubmit}>*/}

                            <Container id='user-name-setting' className="mt-5 mx-auto rounded-4 p-3">
                                <h2 className="text-center pt-3">Profile Image</h2>
                                <Image fluid roundedCircle src={values.profileImageUrl} alt="profile picture" className="d-block mx-auto mt-5 mb-3" id="profile-image"/>

                            </Container>

            <Form onSubmit={handleSubmit} className="bg-light border rounded p-3">
                <h2>Upload/Update Profile Images</h2>
                {/*controlId must match what is passed to the initialValues prop*/}

                <ImageDropZone
                    formikProps={{
                        values,
                        handleChange,
                        handleBlur,
                        setFieldValue,
                        fieldValue: 'profileAvatarUrl'
                    }}
                />
                <Form.Group className={"mt-3"}>
                    <Button className="btn btn-primary" type="submit">Submit</Button>
                    {' '}
                    <Button
                        className="btn btn-danger"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </Form.Group>
            </Form>
        </Container>
            <DisplayStatus status={status} />


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
            <Form.Label>User Avatar</Form.Label>

            <InputGroup size="lg" className="">
                {
                    formikProps.values.profileAvatarUrl &&
                    <>
                        <div className="bg-transparent m-0">
                            <Image  fluid={true} height={200} rounded={true} thumbnail={true} width={100} alt="user avatar" src={formikProps.values.profileAvatarUrl} />
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


