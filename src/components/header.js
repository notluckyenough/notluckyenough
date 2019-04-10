import PropTypes from "prop-types"
import React from "react"
import { Nav } from "react-bootstrap"
import logo from "../../static/images/nle.svg"

const Header = ({ siteTitle }) => (
  <>
    <Nav className="justify-content-center bg-dark" activeKey="/home">
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
    <img src={logo} alt="logo" />
    <p className="text-center mt-4 mb-4"> {siteTitle}</p>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
