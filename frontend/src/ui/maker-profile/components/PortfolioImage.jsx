import {Col, Image} from "react-bootstrap";
import React from "react";

export const PortfolioImage = (props) => {
const { portfolio } = props

  return (
    <>
      <Col className="mt-4 col-auto p-2 order-1 order-md-2">
          <Image src={portfolio.portfolioImageUrl} id="portfolio-image" className="rounded-4"/>
      </Col>
    </>
  )
}

