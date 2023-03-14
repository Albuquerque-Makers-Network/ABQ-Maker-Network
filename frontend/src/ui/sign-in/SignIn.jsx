import {Button, Container, Form, InputGroup} from "react-bootstrap";
import "./SignIn.css"
import React from "react";
import {httpConfig} from "../shared/utils/httpconfig.js";
import {Formik} from "formik";
import * as Yup from "yup"
import {useDispatch} from "react-redux";
import jwtDecode from "jwt-decode";
import {getAuth} from "../../store/auth.js";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {DisplayStatus} from "../shared/components/display-status/display-status.jsx";

export function SignIn() {

  const dispatch = useDispatch()

  const validator = Yup.object().shape({
    profileEmail: Yup.string()
        .email("Please provide valid email")
        .required("Email is required"),
    profilePassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least eight characters")
  });

  const signInValues = {
    profileEmail: "",
    profilePassword: ""
  };

  const submitSignIn = (values, {resetForm, setStatus}) => {
    httpConfig.post("apis/sign-in", values)
        .then(reply => {
          let {message, type} = reply;
          setStatus({message, type});
          if (reply.status === 200 && reply.headers["authorization"] ()) {
            window.localStorage.removeItem("authorization");
            window.localStorage.setItem("authorization", reply.headers["authorization"]);
            resetForm();
            let jwtToken = jwtDecode(reply.headers["authorization"])
            dispatch(getAuth(jwtToken));
          }
        });
  };

  return (
      <>
        <Container className="bg-light mt-5 rounded-4 border border-dark border-3" id="sign-in-form">
          <h1 className="text-center text-light py-5" id="sign-up">Sign-In</h1>
        <Formik initialValues={signInValues} onSubmit={submitSignIn} validationSchema={validator}>
          {SignInFormContent}
        </Formik>
        </Container>
      </>
  )
}

function SignInFormContent(props){

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
  } = props;

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-4 px-3" controlId={'profileEmail'}>
          <InputGroup>
            <Form.Control
              className="form-control"
              // fw-bold border border-dark border-2
              name="profileEmail"
              type='text'
              value={values.profileEmail}
              placeholder="Enter Email"
              onChange={handleChange}
              onBlur={handleBlur}
              />
            {/*<Form.Control type="email" placeholder="Email Address"  maxLength={32} id="placeholder-text" />*/}
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>
        </Form.Group>

        <Form.Group className="mb-4 px-3" controlId='profilePassword'>
          <InputGroup>
            {/*<Form.Control type="password" placeholder="Password" className="fw-bold border border-dark border-2" minLength={8} id="placeholder-text" />*/}
            <Form.Control
                className='form-control'
                name="profilePassword"
                value={values.profilePassword}
                placeholder="Enter Password"
                onChange={handleChange}
                onBlur={handleBlur}
            />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
        </Form.Group>

        <Form.Group className="d-flex justify-content-center">
          {/*<Button variant="light" type="submit" className="mb-3 fw-bold border border-dark border-2">Submit</Button>*/}
          <Button id="sign-in-submit" className='m-2 btn mb-3 fw-bold border border-dark border-2' type="Submit">Submit</Button>
          {" "}
          <Button
            className='m-2 btn btn-danger mb-3 fw-bold border border-dark border-2'
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
            >Reset</Button>
        </Form.Group>
      </Form>
      <Container>
        <DisplayStatus status={status}/>
      </Container>
    </>
  )
}