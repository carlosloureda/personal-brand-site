import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const JobsSection = styled.section`
  padding-bottom: 80px;
  padding-top: 100px;
`;

const Jobs = () => {
  return (
    <JobsSection id="jobs">
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="menu-content pb-20 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Jobs</h1>
            </div>
          </div>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col lg="6" md="6" className="qty-left">
            <div className="single-qly">
              <h3 className="text-uppercase">Udacity</h3>
              <p>March 2019 to Present</p>
              <h4 className="pt-20 pb-20">
                React Mentor (Independent Consultant)
              </h4>
              <p>
                As a consultant for educational platforms such as Udacity. I use
                my specialized knowledge in the field of ReactJS and algorithms
                and my strong communication and training skills to provide
                personalized guidance and advice to students.
              </p>
            </div>
            <div className="btm-border d-block mx-auto"></div>
            <div className="single-qly">
              <h3 className="text-uppercase">Domesting</h3>
              <p>January 2016 to October 2019</p>
              <h4 className="pt-20 pb-20">
                Chief Technology Officer & Co-Founder
              </h4>
              <p>
                Development and expansion of the cloud software solution for the
                cleaning sector. Development of a platform and mobile
                application for an enterprise cleaning solution. Multiplatform
                Hospitality development. Management of a human team of more than
                10 people.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6" className="qty-right">
            <div className="single-qly">
              <h3 className="text-uppercase">Domesting</h3>
              <p>April 2014 to December 2015</p>
              <h4 className="pt-20 pb-20">Software Developer</h4>
              <p>
                MVP development of international cleaning software (UK, Spain
                and Portugal) Yii Framework, JQuery, Javascript, HTML, CSS, Git
              </p>
            </div>
            <div className="btm-border d-block mx-auto"></div>
            <div className="single-qly">
              <h3 className="text-uppercase">upWork</h3>
              <p>September 2010 to April 2014</p>
              <h4 className="pt-20 pb-20">Software Developer</h4>
              <p>
                Web Development: Yii Framework, Python/Django/Flask. Web
                Scraping. Selenium, Python, Scrappy
              </p>
            </div>
            <div className="btm-border d-block mx-auto"></div>
            <div className="single-qly">
              <h3 className="text-uppercase">Freelance</h3>
              <p>February 2007 to June 2011</p>
              <h4 className="pt-20 pb-20">Software Developer</h4>
              <p>
                Maintenance and improvement of systems implemented in Cobol and
                migration of some to web technologies with Java.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </JobsSection>
  );
};
export default Jobs;
