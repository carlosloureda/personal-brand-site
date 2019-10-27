import React from "react";
import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";

const Button = styled.button`
  opacity: 0.3;
  background-color: #8490ff;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  border: none;

  &:hover {
    opacity: 1;
  }
`;

const ArrowUp = styled.span`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -5px;
`;

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <Button
        title="Back to top"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <FaAngleUp color={"white"} />
        {/* <ArrowUp className="glyphicon glyphicon-chevron-up"></ArrowUp> */}
      </Button>
    );
  }
}

export default ScrollButton;
