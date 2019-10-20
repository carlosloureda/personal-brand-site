import React from "react";

import logo from "../../img/logo.png";

import styled from "styled-components";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Section = styled.section`
  /* Adapt the colors based on primary prop */
  background: linear-gradient(0deg, #62bdfc 0%, #8490ff 100%);
  /* background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px; */
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  background-image: linear-gradient(0deg, #62bdfc 0%, #8490ff 100%);
  width: 100% !important;
`;
const NavComponent = () => {
  return (
    <Section>
      <Header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo Carlos Loureda" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#service">Service</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Generic
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Elements
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>
    </Section>
  );
};

export default NavComponent;
