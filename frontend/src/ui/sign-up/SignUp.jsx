import {Button, Container, FormControl, Form, InputGroup} from "react-bootstrap"
import "./SignUp.css"
import React from "react"
import { httpConfig } from "../shared/utils/httpconfig"
import {Formik} from "formik"
import * as Yup from "yup"
import {Link} from "react-router-dom";
import {DisplayStatus} from "../shared/components/display-status/display-status.jsx";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";

export const SignUp = () => {

  const signUpValues =  {
      profileEmail: "",
      profileFullName: "",
      profilePassword: "",
      profilePasswordConfirm: "",
      profileIsMaker: "",
      profileName: ""
    }

  const validator = Yup.object().shape ({
    profileEmail: Yup.string ()
      .email ( 'Email muse be a valid email' )
      .required ( 'Email is required' ),
    profileFullName : Yup.string ()
      .required ( 'Full Name is required')
      .max ( 32, 'Input less than 32 characters' ),
    profilePassword: Yup.string ()
      .required ( 'Password is required' )
      .min ( 8, 'Password must be at least eight characters'),
    profilePasswordConfirm: Yup.string ()
      .required ( 'Password confirmation is required')
      .min ( 8, 'Password must be at least eight characters'),
    profileIsMaker: Yup.boolean ()
      .required ( 'Account Type must be selected'),
    profileName: Yup.string ()
      .required ( 'Username is required')
      .max ( 64, 'Username can not be more than 64 characters')
  })

  const submitSignUp = ( values, { resetForm, setStatus }) => {
    httpConfig.post("/apis/sign-up", values)
      .then (reply => {
          let {message, type} = reply
          if (reply.status === 200) {
            resetForm();
          }
          setStatus({message, type})
        }
      )
  }

  console.log(signUpValues)

return (
    <Formik initialValues= { signUpValues }
            onSubmit= { submitSignUp }
            validationSchema = { validator }>
      { SignUpFormContent }
    </Formik>
)
}

function SignUpFormContent (props) {

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
        <section>
          <Container className="bg-light mt-5 rounded-4 border border-dark border-3" id="sign-up-form">
            <h1 className="text-center text-dark py-5">Sign-Up</h1>
            <Form.Group className="my-3 px-3" controlId = "profileIsMaker">
                <InputGroup className="bg-light rounded-2 align-content-center w-50  border border-dark border-2 ps-3">
                  {/*<FormControl*/}
                  {/*    name="profileIsMaker"*/}
                  {/*    type="boolean"*/}
                  {/*    value = { values.profileIsMaker}*/}
                  {/*    onChange = { handleChange }*/}
                  {/*    onBlur = { handleBlur }*/}
                  {/*  className="form-control">*/}
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="pt-2">
                      <Form.Label inline className="col-12 col-lg-auto fw-bold pe-3">Account Type:</Form.Label>
                      <Form.Check inline label="Community Member" name="group1" type={type} id={`inline-${type}`} />
                      <Form.Check inline label="Maker" name="group1" type={type} id={`inline-${type}`}/>
                    </div>
                  ))}
                    {/*</FormControl>*/}
                </InputGroup>
              <DisplayError errors={errors} touched={touched} field={"profileIsMaker"}/>
            </Form.Group>

          <Form.Group className="mb-4 px-3" controlId = "profileFullName">
            <InputGroup>
              <FormControl
                name="profileFullName"
                type="text"
                value = { values.profileFullName }
                placeholder="Enter your full name"
                onChange = { handleChange }
                onBlur = { handleBlur }
                className="form-control fw-bold border border-dark border-2 placeholder-text"
                maxLength={32} />
            </InputGroup>
            <DisplayError errors={ errors } touched={ touched } field={ "profileFullName"} />
          </Form.Group>

          <Form.Group className="mb-4 px-3" controlId = "profileName">
            <InputGroup>
              <FormControl
                name="profileName"
                type="text"
                value = { values.profileName }
                placeholder="Enter your preferred username"
                onChange = { handleChange }
                onBlur = { handleBlur }
                className="form-control fw-bold border border-dark border-2 placeholder-text"
                maxLength={32}  />
            </InputGroup>
            <DisplayError errors = { errors } touched = { touched } field = { "profileName"} />
          </Form.Group>

          <Form.Group className="mb-4 px-3" controlId = "profilePassword">
            <InputGroup>
              <FormControl
                name="profilePassword"
                type="password"
                value = { values.profilePassword }
                placeholder="Enter your new password"
                onChange = { handleChange }
                onBlur = { handleBlur }
                className="form-control fw-bold border border-dark border-2 placeholder-text"
                minLength={8} />
              ?
            </InputGroup>
            <DisplayError errors = { errors } touched = { touched } field = { "profilePassword"} />
          </Form.Group>

          <Form.Group className="mb-4 px-3" controlId = "profilePasswordConfirm">
            <InputGroup>
              <FormControl
                name="profilePasswordConfirm"
                type="password"
                value = { values.profilePasswordConfirm }
                placeholder="Confirm your password"
                onChange = { handleChange }
                onBlur = { handleBlur }
                className="form-control fw-bold border border-dark border-2 placeholder-text"
                minLength={8} />
            </InputGroup>
              <DisplayError errors = { errors } touched = { touched } field = { "profilePasswordConfirm"} />
          </Form.Group>

          <Form.Group className="mb-4 px-3" controlId = "profileEmail">
            <InputGroup>
              <FormControl
                name="profileEmail"
                type="email"
                value = { values.profileEmail}
                placeholder="Enter your e-mail address"
                onChange = { handleChange }
                onBlur = { handleBlur }
                className="form-control fw-bold border border-dark border-2 placeholder-text"/>
            </InputGroup>
            <DisplayError errors = { errors } touched = { touched } field = { "profileEmail"} />

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
        </section>
      </Form>

      <DisplayStatus status= { status } />

    </>
  )
}