import {Col, Image} from "react-bootstrap";

export const PortfolioImages = ( props ) => {
  const { allPortfolios } = props
  return (
    <>
      <Col className = "p-2 rounded-4">
          <Image src={ allPortfolios.portfolioImageUrl} />
      </Col>
    </>
  )
}

