import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
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
            {graveyard.map(dead => (
              <Col xl="4" lg="4" md="6" sm="6" xs="12" key={dead.name}>
                <a href={dead.link}>{dead.name}</a>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
