import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";

// import {
//   FaHeart,
//   FaTwitter,
//   FaLinkedin,
//   FaLongArrowAltRight
// } from "react-icons/fa";

const ProjectSection = styled.section`
  background-color: #f9f9ff;
  padding: 120px 0;
`;

// const H1 = styled.h1`
//   margin-bottom: ${props => props.mb};
//   margin-top: ${props => props.mt};
//   margin-left: ${props => props.ml};
//   margin-right: ${props => props.mr};
// `;

const Projects = () => {
  return (
    <ProjectSection>
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              {/* <H1 mb={10}>Latest Done Projects</H1> */}
              <h1 className="mb-10">Latest Done Projects</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </Row>
        <Row>
          <Col lg="6" className="project-left">
            <div className="single-project pb-100">
              <img className="img-fluid" src="img/l1.jpg" alt="" />
              <h4 className="pt-100 pb-30">
                <a href="/">Panda Illustration</a>
              </h4>
              <p>
                It won’t be a bigger problem to find one video game lover in
                your neighbor. Since the introduction of Virtual Game, it has
                been achieving great heights so far as its popularity and
                technological.
              </p>
            </div>
            <div className="single-project">
              <img className="img-fluid" src="img/l3.jpg" alt="" />
              <h4 className="pt-100 pb-30">
                <a href="/">Panda Illustration</a>
              </h4>
              <p>
                It won’t be a bigger problem to find one video game lover in
                your neighbor. Since the introduction of Virtual Game, it has
                been achieving great heights so far as its popularity and
                technological.
              </p>
            </div>
          </Col>
          <Col lg="6" className="project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a href="/">Panda Illustration</a>
              </h4>
              <p className=" pb-100">
                It won’t be a bigger problem to find one video game lover in
                your neighbor. Since the introduction of Virtual Game, it has
                been achieving great heights so far as its popularity and
                technological.
              </p>
              <img className="img-fluid" src="img/l2.jpg" alt="" />
            </div>
            <div className="single-project">
              <h4 className="pt-100 pb-30">
                <a href="/">Panda Illustration</a>
              </h4>
              <p className=" pb-30">
                It won’t be a bigger problem to find one video game lover in
                your neighbor. Since the introduction of Virtual Game, it has
                been achieving great heights so far as its popularity and
                technological.
              </p>
              <img className="img-fluid" src="img/l4.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
