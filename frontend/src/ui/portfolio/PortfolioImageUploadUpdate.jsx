import React from "react";
import * as Yup from "yup";
import {Field, Formik, useField} from "formik";
import {Button, Container, Image, Form, FormControl, InputGroup, Row, Col, Stack} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {DisplayStatus} from "../shared/components/display-status/display-status.jsx";
import {FormDebugger} from "../shared/FormDebugger.jsx";
import {httpConfig} from "../shared/utils/httpconfig.js";
import {useDropzone} from "react-dropzone";
import {PortfolioImage} from "../maker-profile/components/PortfolioImage.jsx";
import portfolios from "../../store/portfolios.js";


export const PortfolioImageUploadUpdate = (props) => {
    const {portfolio} = props

    const validationObject = Yup.object().shape({
        portfolioImageUrl: Yup.mixed(),
        portfolioProfileId: Yup.string()
    })

    function submitEditedPortfolio (values, { resetForm, setStatus }) {

        const submitUpdatedPortfolio = (updatedPortfolio) => {
            httpConfig.put(`/apis/portfolio/portfolioProfileId/${profile.profileId}`, updatedPortfolio)
                .then(reply => {
                    let { message, type } = reply

                    if (reply.status === 200) {
                        location.reload()
                    }
                    setStatus({ message, type })
                    return (reply)
                })
        }

        if (values.portfolioImageUrl !== undefined) {
            httpConfig.post(`/apis/image-upload/`, values.portfolioImageUrl)
                .then(reply => {
                        let { message, type } = reply

                        if (reply.status === 200) {
                            submitUpdatedPortfolio({ ...values, portfolioImageUrl: message })
                        } else {
                            setStatus({ message, type })
                        }
                    }
                )
        } else {
            submitUpdatedPortfolio(values)
        }
    }



    return (
        <Formik
            initialValues={portfolio}
            onSubmit={submitEditedPortfolio}
            validationSchema={validationObject}
        >
            {EditPortfolioFormContent}
        </Formik>
    )

}

function EditPortfolioFormContent (props) {
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
                                <Image src={portfolio.portfolioImageUrl} />

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
                        fieldValue: 'portfolioImageUrl'
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


            {/*<FormDebugger {...props} />*/}
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
                    formikProps.values.portfolioImageUrl &&
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


