import { useState, useCallback, useRef, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const Image = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);
  const ref = useRef();

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      handleImageLoaded();
    }
  });
  return (
    <Wrapper {...props}>
      {!isLoaded && <Skeleton className="skeleton" />}
      <img
        src={src}
        alt={alt}
        ref={ref}
        onLoad={handleImageLoaded}
        loading="lazy"
        style={{
          visibility: !isLoaded && "hidden",
        }}
      />
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.div`
  position: relative;
  .skeleton {
    height: 100%;
    min-height: 100%;
    width: 100%;
    z-index: 200;
    position: absolute;
    border-radius: inherit;
  }
  img {
    height: 100%;
    width: 100%;
    layout: inherit;
    fill: inherit;
    max-width: inherit;
    min-height: inherit;
    border-radius: inherit;
    max-height: inherit;
    object-fit: inherit;
  }
`;
