import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Shine } from "../Button/shine";

const Collapsible = ({ children, buttonText, buttonType }) => {
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.scrollHeight);
  }, [isOpen]);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      window.scrollTo(0, scrollPosition - ref.current?.scrollHeight);
      setHeight(0);
    }
  };
  return (
    <>
      <Wrapper height={height} ref={ref}>
        {isOpen && <div>{children}</div>}
      </Wrapper>
      <Button
        onClick={handleFilterOpening}
        isSecondary={!buttonType === "primary"}
        style={{
          marginTop: "2rem",
        }}
      >
        <>
          {buttonText} {isOpen ? "less" : "More"}
        </>{" "}
        <Shine />
      </Button>
    </>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  transition: height 1s ease-in-out;
  height: ${({ height }) => `${height}px`};
`;

export default Collapsible;
