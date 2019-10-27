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
    <ServiceSection id="services">
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
              <img src="img/project.png" alt="" width="60px" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="/">Project Management</a>
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
              <img src="img/advisor.png" alt="" width="60px" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="/">Mentoring</a>
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
              <img src="img/web-dev.png" alt="" width="60px" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="/">Web Development</a>
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
              <img src="img/mobile-app.png" alt="" width="60px" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="/">Mobile Development</a>
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
