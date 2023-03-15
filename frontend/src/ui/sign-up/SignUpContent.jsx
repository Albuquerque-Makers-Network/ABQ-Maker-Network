import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {DisplayStatus} from "../shared/components/display-status/display-status.jsx";
import React from "react";
import {Link} from "react-router-dom";
import {Field, Formik} from "formik"
import * as Yup from "yup"

export function SignUpFormContent (props) {

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
  } = props

  return (
    <>
      <Form onSubmit = { handleSubmit } >
        <Container className="bg-light mt-5 rounded-4 border border-dark border-3" id="sign-up-form">
          <h1 className="text-center text-light py-5" id="sign-up">Sign-Up</h1>

        <Form.Group className="my-3 px-3" controlId = "profileIsMaker">
          <InputGroup>
            <Form.Control
              name="profileIsMaker"
              type="boolean"
              // value = { values.profileIsMaker}
              onChange = { handleChange }
              onBlur = { handleBlur }
              className="form-control bg-light rounded-2 align-content-center w-50 border border-dark border-2 ps-3">
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="pt-2">
                  <Form.Label inline className="col-12 col-lg-4 fw-bold pe-3">Account Type:</Form.Label>
                  <Form.Check inline className="col-12 col-lg-5" label="Community Member" name ="group1" type={type} id={`inline-${type}`} />
                  <Form.Check inline label="Maker" name ="group1" type={type} id={`inline-${type}`}/>
                </div>
              ))}
            </Form.Control>
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={"profileIsMaker"}/>
        </Form.Group>

        <Form.Group className="mb-4 px-3" controlId = "profileFullName">
          <InputGroup>
            <Form.Control
              name="profileFullName"
              type="text"
              // value = { values.profileFullName }
              placeholder="Enter your full name"
              onChange = { handleChange }
              onBlur = { handleBlur }
              className="form-control fw-bold border border-dark border-2 placeholder-text"
              maxLength={32} />
          </InputGroup>
          {/*<DisplayError errors = { errors } touched = { touched } field = { "profileFullName"} />*/}
        </Form.Group>

        <Form.Group className="mb-4 px-3" controlId = "profileName">
          <InputGroup>
            <Form.Control
              name="profileName"
              type="text"
              // value = { values.profileName }
              placeholder="Enter your preferred username"
              onChange = { handleChange }
              onBlur = { handleBlur }
              className="form-control fw-bold border border-dark border-2 placeholder-text"
              maxLength={32}  />
          </InputGroup>
          {/*<DisplayError errors = { errors } touched = { touched } field = { "profileName"} />*/}
        </Form.Group>

        <Form.Group className="mb-4 px-3" controlId = "profilePassword">
          <InputGroup>
            <Form.Control
              name="profilePassword"
              type="password"
              // value = { values.profilePassword }
              placeholder="Enter your new password"
              onChange = { handleChange }
              onBlur = { handleBlur }
              className="form-control fw-bold border border-dark border-2 placeholder-text"
              minLength={8} />
         ?
          </InputGroup>
          {/*<DisplayError errors = { errors } touched = { touched } field = { "profilePassword"} />*/}
        </Form.Group>

        <Form.Group className="mb-4 px-3" controlId = "profilePasswordConfirm">
          <InputGroup>
            <Form.Control
              name="profilePasswordConfirm"
              type="password"
              // value = { values.profilePasswordConfirm }
              placeholder="Confirm your password"
              onChange = { handleChange }
              onBlur = { handleBlur }
              className="form-control fw-bold border border-dark border-2 placeholder-text"
              minLength={8} />
          </InputGroup>
        {/*  <DisplayError errors = { errors } touched = { touched } field = { "profilePasswordConfirm"} />*/}
        </Form.Group>

        <Form.Group className="mb-4 px-3" controlId = "profileEmail">
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="Enter your e-mail address"
              className="form-control fw-bold border border-dark border-2 placeholder-text"/>
          </InputGroup>
          {/*<DisplayError errors = { errors } touched = { touched } field = { "profileEmail"} />*/}

        </Form.Group>

        <Form.Group className="d-flex justify-content-center">
          <Button id="sign-up-submit"
                  variant="light"
                  type="Submit"
                  className="mb-3 fw-bold border border-dark border-2"
                  disabled={!dirty || isSubmitting}>Submit</Button>
        </Form.Group>

          <Container className='my-4 text-center'>
            <h4>Already a member?</h4>
            <a href='./sign-in'><h5 className="text-light">Sign In HERE</h5></a>
          </Container>
        </Container>

      </Form>
      <Container>
        <DisplayStatus status= { status } />
      </Container>
    </>
  )
}