import React from 'react';
import {Container, Form, Image} from "react-bootstrap";

export function UserName () {
    return (
        <>
            <Container id='user-name-setting' className='mt-5 mb-4 rounded-4 px-4 pb-4'>
            <Image fluid roundedCircle src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="profile picture" className="d-block mx-auto mt-5 mb-3" id="profile-image"/>
            <Form.Group className="mb-4 px-3">
                <Form.Control type="username" placeholder="Username" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                <Form.Text>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 px-3">
                <Form.Control type="password" placeholder="Password" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                <Form.Text>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 px-3">
                <Form.Control type="name" placeholder="First Name" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                <Form.Text>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 px-3">
                <Form.Control type="name" placeholder="Last Name" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                <Form.Text>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 px-3">
                <Form.Control type="email" placeholder="Email" className="fw-bold text-bg-light text-center p-3" minLenghth={2} />
                <Form.Text>
                </Form.Text>
            </Form.Group>
            </Container>
        </>
    );
}

