import {Col} from "react-bootstrap";
import React from "react";


export const Skill = (props) => {
  const { skill } = props
  return (
    <>
      <Col className="col-auto">
      <p className="d-inline-block rounded-4 text-center p-2 mx-auto profile-skills">{skill.skillType}</p>
      </Col>
    </>
  )
}