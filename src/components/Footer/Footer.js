import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

import {
  FaHeart,
  FaTwitter,
  FaLinkedin,
  FaLongArrowAltRight
} from "react-icons/fa";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHeart,
//   faTwitter
//   // faFacebook
//   // faLinkedin
// } from "@fortawesome/fontawesome-free-solid";

const H6 = styled.h6`
  color: #fff;
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <Container>
        <Row>
          <Col lg="5" md="6" sm="6">
            <div className="single-footer-widget">
              <H6>About Me</H6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
              <p className="footer-text">
                Copyright ©{new Date().getFullYear()} All rights reserved <br />{" "}
                This website is made with <FaHeart aria-hidden={true} /> by{" "}
                <span>Carlos</span>
              </p>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>
                ,{" "}
                <a
                  href="https://www.flaticon.com/authors/eucalyp"
                  title="Eucalyp"
                >
                  Eucalyp
                </a>
                ,{" "}
                <a
                  href="https://www.flaticon.com/authors/flat-icons"
                  title="Flat Icons"
                >
                  Flat Icons
                </a>
              </div>
            </div>
          </Col>
          <Col lg="5" md="6" sm="6">
            <div className="single-footer-widget">
              <H6>Newsletter</H6>
              <p>Stay update with my latest</p>
              <div class="d-flex flex-row">
                <Form
                  method="get"
                  className="form-inline"
                  action=""
                  noValidate={true}
                >
                  <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onFocus={e => (e.target.placeholder = "")}
                      onBlur={e => (e.target.placeholder = "Enter email")}
                    />
                    <button className="click-btn btn btn-default">
                      <FaLongArrowAltRight aria-hidden="true" />
                    </button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>

          <Col lg="2" md="6" sm="6" className="social-widget">
            <div className="single-footer-widget">
              <H6>Follow Me</H6>
              <p>Let us be social</p>
              <div className="footer-social d-flex align-items-center">
                <a
                  href="https://twitter.com/CarlosLoureda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-loureda-parrado/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                {/* <a href="/">
                  <i className="fa fa-faceboobk"></i>
                </a>
                <a href="/">
                  <i className="fa fa-behance"></i>
                </a> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
