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
    <ProjectSection id="projects">
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              {/* <H1 mb={10}>Latest Done Projects</H1> */}
              <h1 className="mb-10">Latest Done Projects</h1>
              <p>Below some little samples of my work.</p>
            </div>
          </div>
        </Row>
        <Row>
          <Col lg="6" className="project-left">
            <div className="single-project pb-100">
              <img className="img-fluid" src="img/4_connect.png" alt="" />
              <h4 className="pt-30 pb-30">
                <a href="/">Connect</a>
              </h4>
              <p className="pb-100">
                At my previous startup (Domesting SL) as co-founder I had to
                transform the previous solution for domestic cleaning services
                into a solution for the cleaning companies. With connect we
                didn't focus only only on freelancer cleaners, we added a
                solution for all kind of cleaning companies and facilities.
              </p>
            </div>
            <div className="single-project">
              <img className="img-fluid" src="img/3_facilities.png" alt="" />
              <h4 className="pt-100 pb-30">
                <a href="/">Domesting Facilities</a>
              </h4>
              <p className="pb-30">
                An adjustment in the connect page where we have been able to
                help large companies or facilities to manage the revision of the
                cleaning of their establishments.
              </p>
            </div>
          </Col>
          <Col lg="6" className="project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a href="/">Hospitality</a>
              </h4>
              <p className=" pb-100">
                The crown jewel. The definitive solution for the management of
                housekeeping and maintenance of hotels, as well as its
                communication with frontdesk. In this project I was the CTO and
                helped in the product design to be able to assemble a total
                solution for hotels, both web and mobile. I managed an
                international team of 10 people and was a fundamental part in
                the development and implementation of the mobile application.
              </p>
              <img className="img-fluid" src="img/2_hospitality.png" alt="" />
            </div>
            <div className="single-project">
              <h4 className="pt-100 pb-30">
                <a href="/">Domesting</a>
              </h4>
              <p className="pb-30">
                <strong>Domesting.com</strong> was the first website I built on
                the startup I co-founded. At that time I was the unique
                developer in the first stages of the company. I built a complete
                website to provide final users and domestic cleaner a tool for
                them to manage the domesting cleaning services.
              </p>
              <img
                className="img-fluid"
                src="img/1_domesting_project.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
