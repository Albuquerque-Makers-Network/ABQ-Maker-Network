import {Col, Image} from "react-bootstrap";
import React from "react";

export const PortfolioImage = (props) => {
const { portfolio } = props

  return (
    <>
      <Col className = "mt-4 col-auto p-2 rounded-4 order-1 order-md-2" id="portfolio-image">
          <Image src={portfolio.portfolioImageUrl} className="rounded-4"/>
      </Col>
    </>
  )
}

