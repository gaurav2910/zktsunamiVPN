import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <>
      <div>
        <Navbar className="pixelOperator px-2 px-md-5 pixelOperatorMonoBold" expand="lg">
          <Navbar.Brand className="d-flex justify-content-center" href="#">
            <img
              width="30"
              height="30"
              src={process.env.PUBLIC_URL + "/images/bl.png"}
            />
            ZKTsunami VPN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/home" className="px-4">
                Features
              </Nav.Link>
              <Nav.Link to="/about" className="px-4">
                What is a VPN?
              </Nav.Link>
              <Nav.Link to="/contact" className="px-4">
                Pricing
              </Nav.Link>
              <Nav.Link to="/home" className="px-4">
                Help
              </Nav.Link>
              <Nav.Link to="/contact" className="d-block d-md-none">Login</Nav.Link>
            </Nav>
            <div className="form-inline d-inline d-none d-md-block">
              <Nav.Link to="/contact">Login</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div></div>
    </>
  );
};

export default Header;
