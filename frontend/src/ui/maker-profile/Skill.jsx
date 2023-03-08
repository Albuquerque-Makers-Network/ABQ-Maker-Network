import {Container, Image} from "react-bootstrap";
import React from "react";


export function Skill () {
  return (
    <>
      <Container>
      <p className="rounded-4 bg-dark text-white text-center p-2 me-1 d-inline-block">Skill 1</p>
      {/*remove below*/}
      <p className="rounded-4 bg-dark text-white text-center p-2 me-1 d-inline-block ">Metalworking</p>
      <p className="rounded-4 bg-dark text-white text-center p-2 me-1 d-inline-block ">Other Skill</p>
      <p className="rounded-4 bg-dark text-white text-center p-2 me-1 d-inline-block ">Skill 1</p>
      <p className="rounded-4 bg-dark text-white text-center p-2 me-1 d-inline-block ">Skill 1</p>
      <p className="rounded-4 bg-dark text-white text-center p-2 me-1 d-inline-block ">Skill 1</p>
      </Container>
    </>
  )
}