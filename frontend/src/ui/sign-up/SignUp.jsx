import { Button, Container, Form } from "react-bootstrap"
import "./SignUp.css"
import React from "react"
import { httpConfig } from "../shared/utils/httpconfig"
import { Formik } from "formik"
import * as Yup from "yup"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { DisplayError } from "../shared/components/display-error/DisplayError"
import { DisplayStatus } from "../shared/components/display-status/display-status.jsx";

export function SignUp() {

  const { signUpValues } = ''
  const dispatch = useDispatch ()

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
      .required ( 'Password confirmation is required'),
      //. must be same as password
    profileIsMaker: Yup.string () //Yup...
  .required ( 'Account Type must be selected'),
  //radio button
    profileName: Yup.string ()
    .required ( 'Username is required')
      .max ( 64, 'Username can not be more than 64 characters')
    //must be unique
  })

  const submitSignUp = ( values, { resetForm, setStatus }) => {
    httpConfig.post (" apis/sign-up ", values)
      .then (reply => {
        let { message, type } = reply
        setStatus ({ message, type })
        if ( reply.status === 200 ) {
          window.localStorage.removeItem
        }

      })
  }

return (
  <>
    <Container className="bg-light mt-5 rounded-4 border border-dark border-3" id="sign-up-form">
      <h1 className="text-center text-light py-5" id="sign-up">Sign-Up</h1>
    <Formik initialValues={ signUpValues }
            onSubmit= { submitSignUp }
            validationSchema = { validator }>
      { SignUpFormContent }
    </Formik>

      <Container className='my-4 text-center'>
        <h4>Already a member?</h4>
        <Link to='/sign-in'><h5>Sign In HERE</h5></Link>
      </Container>
  </Container>
  </>
)


}

function SignUpFormContent (props) {

  const {
    status,
    values,
    errors,
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

          <Form.Group className="my-3 px-3 ">
            <Form className="bg-light rounded-2 align-content-center w-50 border border-dark border-2 ps-3">
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="pt-2">
                  <Form.Label inline className="col-12 col-lg-4 fw-bold pe-3">Account Type:</Form.Label>
                  <Form.Check inline className="col-12 col-lg-5" label="Community Member" name ="group1" type={type} id={`inline-${type}`} />
                  <Form.Check inline label="Maker" name ="group1" type={type} id={`inline-${type}`}/>
                </div>
              ))}
            </Form>
          </Form.Group>

          <Form.Group className="mb-4 px-3">
            <Form.Control type="name" placeholder="Enter your full name" className="fw-bold border border-dark border-2" maxLength={32} id="placeholder-text"/>
          </Form.Group>

          <Form.Group className="mb-4 px-3">
            <Form.Control type="username" placeholder="Enter your preferred username" className="fw-bold border border-dark border-2" maxLength={32} id="placeholder-text" />
          </Form.Group>

          <Form.Group className="mb-4 px-3">
            {/*<Form.Label className="text-light fw-bold">New password:</Form.Label>*/}
            <Form.Control type="password" placeholder="Enter your new password" className="fw-bold border border-dark border-2" minLength={8} id="placeholder-text" />
            <Form.Text className="text-light">
              Please enter a password that is at least 8 characters long
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4 px-3">
            {/*<Form.Label className="text-light fw-bold">Confirm password:</Form.Label>*/}
            <Form.Control type="password" placeholder="Confirm your new password" className="fw-bold border border-dark border-2" minLength={8} id="placeholder-text" />
          </Form.Group>

          <Form.Group className="mb-4 px-3">
            {/*<Form.Label className="text-light fw-bold">E-mail:</Form.Label>*/}
            <Form.Control type="email" placeholder="Enter your e-mail address" className="fw-bold border border-dark border-2" id="placeholder-text"/>
          </Form.Group>

          <Form.Group className="d-flex justify-content-center">
            <Button variant="light" type="submit" className="mb-3 fw-bold border border-dark border-2">Submit</Button>
          </Form.Group>

      </Form>
    </>
  )


}