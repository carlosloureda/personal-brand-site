import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FeaturesSection = styled.section`
  padding-top: 100px;
`;

const SingleFeature = ({ title, content, url }) => {
  return (
    <Col lg="4" md="6">
      <div className="single-feature mb-30">
        <div className="title d-flex flex-row pb-20">
          <span className="lnr lnr-user"></span>
          <h4>
            <a href={url ? url : ""}>{title}</a>
          </h4>
        </div>
        <p>{content}</p>
      </div>
    </Col>
  );
};
const Features = () => {
  const mockedContent =
    "Usage of the Internet is becoming more common due to rapid advancement of technology and power.";
  return (
    <FeaturesSection>
      <Container>
        <Row className="d-flex justify-content-center">
          <div class="menu-content pb-70 col-lg-8">
            <div class="title text-center">
              <h1 class="mb-10">Some Features that Made us Unique</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </Row>
        <Row>
          <SingleFeature title="Expert Technicians" content={mockedContent} />
          <SingleFeature title="Professional Service" content={mockedContent} />
          <SingleFeature title="Great Support" content={mockedContent} />
          <SingleFeature title="Technical Skills" content={mockedContent} />
          <SingleFeature title="Highly Recomended" content={mockedContent} />
          <SingleFeature title="Positive Reviews" content={mockedContent} />
        </Row>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
