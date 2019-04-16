import React from "react"
import { Nav } from "react-bootstrap"
import Logo from "../../static/images/nle.svg"
import { Container, Row, Col } from "react-bootstrap"

const Header = () => (
  <>
    <Nav className="justify-content-center bg-dark">
      <Nav.Item>
        <Nav.Link
          className="text-light"
          href="https://github.com/notluckyenough"
        >
          متن‌باز
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-light" href="https://twitter.com">
          توییتر
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center m-5">
          <Logo />
        </Col>
      </Row>
    </Container>
  </>
)

export default Header
