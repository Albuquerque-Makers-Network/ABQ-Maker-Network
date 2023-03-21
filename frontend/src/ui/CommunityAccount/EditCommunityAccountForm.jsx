import React from "react";
import * as Yup from "yup";
import {httpConfig} from '../shared/utils/httpconfig';
import {Formik} from 'formik';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {DisplayError} from "../shared/components/display-error/DisplayError.jsx";
import {DisplayStatus} from "../shared/components/display-status/display-status.jsx";
import {FormDebugger} from "../shared/FormDebugger.jsx";

export const EditCommunityAccountForm = (props) => {

    const { profile } = props

    const validationObject = Yup.object().shape({

        profileFullName: Yup.string()
            .max ( 32, 'Input less than 32 characters' ),
        profileEmail: Yup.string()
            .email( 'Email must be a valid email' ),
        profileName: Yup.string()
            .max ( 64, 'Username cannot be more than 64 characters' ),
        // profilePassword: Yup.string()
        //     .min ( 8, 'Password must be at least eight characters' )
        //     .max ( 15, 'Password must not exceed fifteen characters' ),
        // profilePasswordConfirm: Yup.string()
        //   .when("profilePassword", {
        //     is: val => (val && val.length > 0), then: Yup.string().oneOf([Yup.ref("profilePassword")], "Password confirmation must match")
        //   })
    })

    function submitEditedProfile (values, { resetForm, setStatus }) {

            httpConfig.put(`/apis/profile/${profile.profileId}`, values)
                .then(reply => {
                    let {message, type} = reply

                    if (reply.status === 200) {
                    }
                    setStatus({message, type})
                    return (reply)
                })

    }

    return (
        <>
        <Formik
            initialValues={profile}
            onSubmit={submitEditedProfile}
            validationSchema={validationObject}
        >
            {EditProfileFormContent}
        </Formik>
        </>
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
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
        } = props

        return (
            <>
                <Form onSubmit={handleSubmit}>
                    <h1 className="text-center text-light py-5">Update Account Information</h1>
                {/*controlId must match what is passed to the initialValues prop*/}
                <Form.Group className="mb-4 px-3" controlId="profileFullName">
                    <Form.Label>Enter your full name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            {/*<FontAwesomeIcon icon="envelope"/>*/}
                        </InputGroup.Text>
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
                <Form.Group className="mb-4 px-3" controlId="profileEmail">
                    <Form.Label>Update your e-mail address</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            {/*<FontAwesomeIcon icon="envelope"/>*/}
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profileEmail"
                            type="email"
                            value={values.profileEmail}
                            placeholder="you@email.com"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
                </Form.Group>
                <Form.Group className="mb-4 px-3" controlId="profileName">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            {/*<FontAwesomeIcon icon="envelope"/>*/}
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profileName"
                            type="text"
                            value={values.profileName}
                            placeholder="you@email.com"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'profileName'}/>
                </Form.Group>

                {/*<Form.Group className="mb-4 px-3" controlId="profilePassword">*/}
                {/*    <Form.Label>Update your password</Form.Label>*/}
                {/*    <InputGroup>*/}
                {/*      <InputGroup.Text>*/}
                {/*        /!*<FontAwesomeIcon icon="envelope"/>*!/*/}
                {/*      </InputGroup.Text>*/}
                {/*        <FormControl*/}
                {/*            className="form-control"*/}
                {/*            name="profilePassword"*/}
                {/*            type="password"*/}
                {/*            value={values.profilePassword}*/}
                {/*            placeholder="Password"*/}
                {/*            onChange={handleChange}*/}
                {/*            onBlur={handleBlur}*/}
                {/*        />*/}
                {/*    </InputGroup>*/}
                {/*    <DisplayError errors={errors} touched={touched} field={'profilePassword'}/>*/}
                {/*</Form.Group>*/}
                {/*<Form.Group className="mb-4 px-3" controlId="profilePasswordConfirm">*/}
                {/*    <Form.Label>Confirm your updated password</Form.Label>*/}
                {/*    <InputGroup>*/}
                {/*        <InputGroup.Text>*/}
                {/*            /!*<FontAwesomeIcon icon="envelope"/>*!/*/}
                {/*        </InputGroup.Text>*/}
                {/*        <FormControl*/}
                {/*            className="form-control"*/}
                {/*            name="profilePasswordConfirm"*/}
                {/*            type="password"*/}
                {/*            value={values.profilePasswordConfirm}*/}
                {/*            placeholder="Password"*/}
                {/*            onChange={handleChange}*/}
                {/*            onBlur={handleBlur}*/}

                {/*        />*/}
                {/*    </InputGroup>*/}
                {/*    <DisplayError errors={errors} touched={touched} field={'profilePasswordConfirm'}/>*/}
                {/*</Form.Group>*/}

                <Form.Group className="d-flex justify-content-center">
                    <Button variant="light"
                            type="submit"
                            className='m-2 btn btn-danger mb-3 fw-bold border border-dark border-2'>
                            Submit changes</Button>
                            {" "}
                    <Button
                        className='m-2 btn btn-danger mb-3 fw-bold border border-dark border-2'
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset</Button>
                </Form.Group>
                </Form>
                <DisplayStatus status={status}/>

                {/*<FormDebugger {...props} />*/}

            </>
    )
}