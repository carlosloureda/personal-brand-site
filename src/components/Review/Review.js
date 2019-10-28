import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ReviewsSection = styled.section`
  padding-top: 100px;
`;

const SingledReviewDiv = styled.div`
  background-color: #f9f9ff;
  padding: 30px 30px 15px 30px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-bottom: 30px;

  & a {
    color: #000;
  }
  &:hover {
    background-image: linear-gradient(0deg, #62bdfc 0%, #8490ff 100%);
    color: #fff;
    cursor: pointer;
  }
  &:hover a,
  &:hover .title .lnr {
    color: #fff;
  }
  & .title .lnr {
    color: #000;
    font-weight: 400;
    margin-right: 12px;
    font-size: 20px;
  }
`;

const ShowMore = styled.span`
  color: blue;
  &:hover {
    color: lightblue;
  }
`;

const SingledReview = ({ title, content, url }) => {
  const [textExpanded, setTextExpanded] = React.useState(false);
  const longText = content.length > 185 ? true : false;
  const textShortennedArr = content.slice(0, 185).split("\n");

  content = content.split("\n");

  const toggleText = e => {
    e.stopPropagation();
    return setTextExpanded(() => !textExpanded);
  };

  return (
    <Col lg="4" md="6">
      <SingledReviewDiv className="single-dReview">
        <div className="title d-flex flex-row pb-20">
          <span className="lnr lnr-user"></span>
          <h4>
            <a href={url ? url : ""} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h4>
        </div>
        <div>
          {longText &&
            !textExpanded &&
            textShortennedArr.map((line, i) => (
              <p key={i}>
                {line}{" "}
                {i === textShortennedArr.length - 1 ? (
                  <ShowMore onClick={e => toggleText(e)}>Show More</ShowMore>
                ) : null}
              </p>
            ))}

          {longText &&
            textExpanded &&
            content.map((line, i) => (
              <p key={i}>
                {line}
                {i === content.length - 1 ? (
                  <ShowMore onClick={e => toggleText(e)}>Show Less</ShowMore>
                ) : null}
              </p>
            ))}
          {!longText && content.map((line, i) => <p key={i}>{line}</p>)}
        </div>
      </SingledReviewDiv>
    </Col>
  );
};
const Reviews = () => {
  const figueComment = `Carlos stands out for being a great partner and of course a great friend! There is no doubt that he has made Domesting a dynamic and fun place to work and where everyone can participate.
    He has great qualities to lead a team but what he stands out for is his personal skills, he always tries to be fair in his decisions by empathizing with people and reaching a consensus. He has managed to create an organized and competent technical team, always promoting the work and effort of the youngest and helping them to grow in their careers.
    His joy and commitment have managed to infect the whole team with the necessary enthusiasm for the project to go ahead even at the lowest moments.
    I am taking a friend with me for life and I hope that in the future we will work together again!`;

  const rubenComment = `Carlos is clearly interested in helping anyone grow in their career. As a Domesting CTO, his energy, team organization and dedication to the project predominate.
  Together, we have managed to create, from the technical point of view, a good application without much prior knowledge about the technologies, but this did not pose any problem for him since he is capable of adapting to any obstacle.
  It's nice to have someone on your side who is so interested in what's new in the sector, so it's impossible to become obsolete.`;

  const alexComment = `Carlos has been, without a doubt, an indispensable pillar for the success of Domesting. He is a tireless worker, with an admirable passion for his work. His dedication and commitment even at the lowest moments have infected us with the necessary enthusiasm for the project to go ahead.
  With his preparation and technical skills beyond any doubt, I want to highlight his personal skills. He is a colleague with great empathy, always ready to help the rest of the team. His optimism has allowed him to maintain an ideal working environment.
  But, really, if anything has captivated me about Carlos during my time at Domesting, it has been both his organizational capacity and his leadership skills. He has known how to assume responsibilities in the most critical moments, taking decisions firmly and facilitating the understanding of the objectives throughout the organization. He has always fought for team cohesion and the involvement of all departments.
  It has created a technical team that is up to the task, promoting the proactivity of the youngest and getting involved in the training of its employees, motivating them and guiding them in their professional growth. He has proven himself capable of getting the most out of his teams, maintains a high level of exigency while providing security and makes you feel valued, something for which his colleagues remember him with great esteem.
  At his side, I've learned that dedication and sacrifice always have results. I want my future job to bring me more bosses (and friends) like him.`;

  const sacoComment = `I would like to write a recommendation that will help Carlos achieve what he is proposing at the moment at a professional level, but I doubt that he can compete with his own persistence. Carlos is a tireless worker, who is always looking for a way to surpass himself, others, and mainly to surprise with solutions in the most unexpected moments. I would not hesitate to have him as a partner and I am left with the desire to be able to undertake something in common. Who knows...`;
  const url = "https://www.linkedin.com/in/carlos-loureda-parrado/#ember518";
  return (
    <ReviewsSection id="reviews">
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Some of my latests Linkedin Reviews</h1>
              {/* <p>Who are in extremely love with eco friendly system.</p> */}
            </div>
          </div>
        </Row>
        <Row>
          <SingledReview
            title="Patricia Figueroa Rodríguez"
            content={figueComment}
            url={url}
          />
          <SingledReview
            title="Rubén Costa Martínez"
            content={rubenComment}
            url={url}
          />
          <SingledReview
            title="Alex González Rodríguez"
            content={alexComment}
            url={url}
          />
          <SingledReview
            title="Patricia Saco"
            content={sacoComment}
            url={url}
          />
          {/* <SingledReview title="Highly Recomended" content={mockedContent} />
          <SingledReview title="Positive Reviews" content={mockedContent} /> */}
        </Row>
      </Container>
    </ReviewsSection>
  );
};

export default Reviews;
