import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import graveyard from "../graveyard.json"
import { Container, Row, Col } from "react-bootstrap"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Container>
          <Row>
            {graveyard.map((dead, index) => (
              <Col xl="4" lg="4" md="6" sm="6" xs="12" key={index}>
                <hr />
                <Row>
                  <Col className="p-2 text-right">
                    <a className="text-dark" href={dead.link}>
                      {dead.name}
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-secondary p-2 text-right">
                    {dead.description}
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
