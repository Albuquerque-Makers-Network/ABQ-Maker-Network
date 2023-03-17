import {Col, Image} from "react-bootstrap";
import React from "react";
import portfolios from "../../../store/portfolios.js";

export const PortfolioImages = (props) => {
const {portfolio} = props

  return (
    <>
      <Col className = "p-2 rounded-4">
          <Image src={portfolio.portfolioImageUrl} />
      </Col>
    </>
  )
}

