import {Button, Container, Form, InputGroup} from "react-bootstrap"
import "./SignUp.css"
import React from "react"
import { httpConfig } from "../shared/utils/httpconfig"
import { Formik } from "formik"
import * as Yup from "yup"
import {Link} from "react-router-dom";
import {SignUpFormContent} from "./SignUpContent.jsx";

export const SignUp = () => {

  const signUpValues = {
    profileEmail: "",
    profileFullName: "",
    profilePassword: "",
    profilePasswordConfirm: "",
    profileIsMaker: "",
    profileName:""
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
      .required ( 'Password confirmation is required'),
    profileIsMaker: Yup.boolean ()
  .required ( 'Account Type must be selected'),
    profileName: Yup.string ()
    .required ( 'Username is required')
      .max ( 64, 'Username can not be more than 64 characters')
  })

  const submitSignUp = ( values, { resetForm, setStatus }) => {
    httpConfig.post("/apis/sign-up", values)
      .then(reply => {
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
      < SignUpFormContent />
    </Formik>
)
}