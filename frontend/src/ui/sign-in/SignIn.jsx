import {Button, Container, Form} from "react-bootstrap";
import style from "./SignIn.css"

export function SignIn() {
  return (
    <>

    <section>
      <Container className="bg-light mt-5 rounded-4 border border-dark border-3" id="sign-in-form">
        <h1 className="text-center text-light py-5" id="sign-up">Sign-In</h1>

        <Form.Group className="mb-4 px-3">
          <Form.Control type="email" placeholder="Email Address" className="fw-bold border border-dark border-2" maxLength={32} id="placeholder-text" />
        </Form.Group>

        <Form.Group className="mb-4 px-3">
          <Form.Control type="password" placeholder="Password" className="fw-bold border border-dark border-2" minLength={8} id="placeholder-text" />
        </Form.Group>

        <Form.Group className="d-flex justify-content-center">
          <Button variant="light" type="submit" className="mb-3 fw-bold border border-dark border-2">Submit</Button>
        </Form.Group>
      </Container>
    </section>
    </>
  )
}