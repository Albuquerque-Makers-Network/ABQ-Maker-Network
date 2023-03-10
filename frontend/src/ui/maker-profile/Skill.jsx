import {Container, Image} from "react-bootstrap";
import React from "react";


export function Skill () {
  return (
    <>
      <Container>
      <p className="rounded-4 text-center p-2 me-1 d-inline-block profile-skills">Skill 1</p>
      {/*remove below*/}
      <p className="rounded-4 text-center p-2 me-1 d-inline-block profile-skills">Metalworking</p>
      <p className="rounded-4 text-center p-2 me-1 d-inline-block profile-skills">Other Skill</p>
      <p className="rounded-4 text-center p-2 me-1 d-inline-block profile-skills">Woodworking</p>
        <p className="rounded-4 text-center p-2 me-1 d-inline-block profile-skills">Woodworking</p>
        <p className="rounded-4 text-center p-2 me-1 d-inline-block profile-skills">Woodworking</p>
      </Container>
    </>
  )
}