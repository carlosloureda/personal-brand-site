import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceSection = styled.section`
  padding: 120px 0;
`;

const Services = () => {
  return (
    <ServiceSection>
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Have a Look at my Services</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </Row>
        <Row>
          <div className="single-service col-lg-6 col-md-6 mb-30">
            <div className="icon">
              <img src="img/s1.png" alt="" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="/">Web Design</a>
              </h4>
              <p className="mt-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div className="single-service col-lg-6 col-md-6 mb-30">
            <div className="icon">
              <img src="img/s2.png" alt="" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="/">Mobile Design</a>
              </h4>
              <p className="mt-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div className="single-service col-lg-6 col-md-6">
            <div className="icon">
              <img src="img/s3.png" alt="" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="/">Print Design</a>
              </h4>
              <p className="mt-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div className="single-service col-lg-6 col-md-6">
            <div className="icon">
              <img src="img/s4.png" alt="" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="/">Interaction Design</a>
              </h4>
              <p className="mt-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </ServiceSection>
  );
};

export default Services;
