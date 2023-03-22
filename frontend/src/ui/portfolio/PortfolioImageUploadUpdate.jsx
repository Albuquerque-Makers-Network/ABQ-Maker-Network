import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Container, Image, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import { DisplayStatus } from "../shared/components/display-status/display-status.jsx";
import { httpConfig } from "../shared/utils/httpconfig.js";
import { useDropzone } from "react-dropzone";
import { PortfolioImage } from "../maker-profile/components/PortfolioImage.jsx";
import { useSelector } from "react-redux";

export const PortfolioImageUploadUpdate = (props) => {
    const { portfolio } = props
   const newPortfolio = {
      portfolioImageUrl: ""
   }
    const validationObject = Yup.object().shape({
        portfolioImageUrl: Yup.mixed(),
    })

    function submitEditedPortfolio (values, { resetForm, setStatus }) {

        const submitUpdatedPortfolio = (updatedPortfolio) => {
            httpConfig.post(`/apis/portfolio/portfolioProfileId/${portfolio.portfolioProfileId}`, updatedPortfolio)
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
            initialValues={newPortfolio}
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
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props

    const portfolios = useSelector(state => {
        if (state?.portfolios.constructor.name === "Object") {
        return Object.values(state.portfolios)
        } else {
        return null
        }
    })

    const renderedPortfolios = (portfolios) => {
        if (portfolios === null) {
        return (<h5> No portfolios to display </h5>)
        } else {
        return (portfolios.map((portfolio, index) => <PortfolioImage portfolio={portfolio} key={index}/>))
        }
    }

    return (
        <>
        <Container className="maker-image-upload">
                {/*<Form onSubmit={handleSubmit}>*/}
            <Container id='user-name-setting' className="mt-5 mx-auto rounded-4 p-3">
                <h2 className="text-center pt-3">Profile Image</h2>
                <Row className="justify-content-evenly">
                    {renderedPortfolios(portfolios)}
                </Row>
            </Container>

            <Form onSubmit={handleSubmit} id="upload-image" className="border rounded-4 mt-3 p-3">
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
                    formikProps.portfolioImageUrl &&
                    <>
                        <div className="bg-transparent m-0">
                            <Image  fluid={true} height={200} rounded={true} thumbnail={true} width={100} alt="user avatar" src={formikProps.portfolioImageUrl} />
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