import {Button, Container, Form} from "react-bootstrap";


export function SignUp() {
  return (
    <>
      {/*<Navigation /> //Not created yet*/}

    <section>
      <Container className="bg-secondary mt-5 rounded-4">
        <h1 className="text-white text-center pt-3"> Sign-Up </h1>
        <Form.Group className="my-3 px-3">
          <Form className="bg-light rounded-2 pt-2 w-50">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Label inline className="px-3 fw-bold">Account Type:</Form.Label>
                <Form.Check inline label="Maker" name ="group1" type={type} id={`inline-${type}`} />
                <Form.Check inline label="Community Member" name ="group1" type={type} id={`inline-${type}`} />
              </div>
            ))}
          </Form>
            <Form.Text>

          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4 px-3">
          {/*<Form.Label className="text-light fw-bold">Name:</Form.Label>*/}
          <Form.Control type="name" placeholder="Enter your full name" className="fw-bold" maxLength={32} />
          <Form.Text>

          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4 px-3">
          {/*<Form.Label className="text-light fw-bold">New username:</Form.Label>*/}
          <Form.Control type="username" placeholder="Enter your preferred username" className="fw-bold" maxLength={32} />
          <Form.Text>

          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4 px-3">
          {/*<Form.Label className="text-light fw-bold">New password:</Form.Label>*/}
          <Form.Control type="password" placeholder="Enter your new password" className="fw-bold" minLength={8} />
          <Form.Text className="text-light">
            Password instructions
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4 px-3">
          {/*<Form.Label className="text-light fw-bold">Confirm password:</Form.Label>*/}
          <Form.Control type="password" placeholder="Confirm your new password" className="fw-bold" minLength={8} />
          <Form.Text>

          </Form.Text >
        </Form.Group>
        <Form.Group className="mb-4 px-3">
          {/*<Form.Label className="text-light fw-bold">E-mail:</Form.Label>*/}
          <Form.Control type="email" placeholder="Enter your e-mail address" className="fw-bold"/>
          <Form.Text>

          </Form.Text>
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button variant="light" type="submit" className="mb-3 fw-bold">Submit</Button>
        </Form.Group>
      </Container>
    </section>


    </>
  )
}