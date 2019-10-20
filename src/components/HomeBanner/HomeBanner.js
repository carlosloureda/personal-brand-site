import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavComponent from "./nav/Nav";

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

const HomeBanner = () => {
  return (
    <Section>
      <NavComponent />
      <Container>
        <Row className="justify-content-start align-items-center">
          <Col lg="6" md="12" className="no-padding banner-right">
            <img class="img-fluid" src="img/header-img.png" alt="" />
          </Col>
          <Col lg="6" md="12" className="banner-left">
            <h1 className="text-white">
              Hi, I’m <br />
              <span>Carlos Loureda</span> <br />
              Software Arquitect
            </h1>
            <p className="mx-auto text-white  mt-20 mb-40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod temp <br /> or incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim.
            </p>
            <a href="/" className="text-uppercase header-btn">
              Let Us Talk
            </a>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default HomeBanner;
