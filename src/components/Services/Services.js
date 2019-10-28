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
              <h1 className="mb-10">Have a Look at my top Services</h1>
              {/* <p>Who are in extremely love with eco friendly system.</p> */}
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
                Co-founding my own startup, in which I started as a worker and
                sole developer, I have been able to understand the needs that
                requires an ambitious project. Once the company settled, I have
                led teams of up to 10 people to develop up to 3 different
                products at once.
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
                I have always liked to exchange knowledge and get to know
                different points of view. This past year I have developed these
                skills as a React/Redux/React Native mentor in Udacity as well
                as in my locality. Something that continues to allow me to grow
                by learning from others.
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
                The web came first, but how it's evolving! We have to adapt to
                these times when Javascript is advancing and improving the way
                we set up our websites. Nowadays we have to talk about JAMStack,
                GraphQL, monorepositories and more topics.
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
                The development of an ecosystem based on mobile applications is
                increasingly necessary. It is no longer enough to have a
                website, now we have to provide real multiplatform solutions. We
                can make developments that run perfectly in both Android and i
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </ServiceSection>
  );
};

export default Services;
