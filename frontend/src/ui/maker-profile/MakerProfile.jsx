import {Col, Container, Image, Row} from "react-bootstrap";


export function MakerProfile() {
  return (
    <>

      {/*<Navigation />*/}

  <Container className="bg-secondary mt-5 p-5 rounded-4 me-5">
    <Row>
      <Col className="float-start">
        <Image roundedCircle src="https://www.picsum.photos/250" alt="profile picture" className="d-block " />
      </Col>
      <Col lg={6}>
        <h2>profileFullName</h2>
        <p>profileAboutMe</p>
        <p>profileEmail</p>
      </Col>
      <Col>
        <h2>Skills:</h2>
        <p className="rounded-4 bg-dark text-white text-center p-2  d-inline-block ">Skill 1</p>
        {/*remove below*/}
        <p className="rounded-4 bg-dark text-white text-center p-2  d-inline">Skill 1</p>
        <p className="rounded-4 bg-dark text-white text-center p-2  d-inline">Skill 1</p>
        <p className="rounded-4 bg-dark text-white text-center p-2  d-inline">Skill 1</p>
        <p className="rounded-4 bg-dark text-white text-center p-2  d-inline">Skill 1</p>
        <p className="rounded-4 bg-dark text-white text-center p-2  d-inline">Skill 1</p>
      </Col>
    </Row>
  </Container>
    <Container className="m-5">
    <Row>
      <Col className="container-fluid">
        <Image src= "https://www.picsum.photos/150/200" alt="portfolio image" className="p-2 rounded-4"/>
        <Image rounded src= "https://www.picsum.photos/150/200" alt="portfolio image" className="p-2"/>
        <Image rounded src= "https://www.picsum.photos/150/200" alt="portfolio image" className="p-2"/>
        <Image rounded src= "https://www.picsum.photos/150/200" alt="portfolio image" className="p-2"/>
      </Col>
      <Col lg={4} className="bg-secondary rounded-4 p-4">
        <h2>Pricing:</h2>
        <p>profilePricing</p>
      </Col>
    </Row>
  </Container>
    </>
  )

}