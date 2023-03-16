import {Col, Image} from "react-bootstrap";
import React from "react";

export const PortfolioImages = () => {

  return (
    <>
      <Col className = "p-2 rounded-4">
          <Image src={ portfolio.portfolioImageUrl} />
      </Col>
    </>
  )
}

