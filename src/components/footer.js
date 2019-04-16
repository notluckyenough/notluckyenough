import React from "react"
import { Nav } from "react-bootstrap"

const Footer = ({ siteTitle }) => (
  <footer>
    <Nav className="justify-content-center bg-dark">
      <Nav.Item>
        <Nav.Link className="text-light" href="https://www.gatsbyjs.org">
          ساخته شده با Gatsby
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </footer>
)

export default Footer
