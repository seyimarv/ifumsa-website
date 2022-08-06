import { useEffect, useRef, useState, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Image = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoaded = useCallback(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);
  const image = useRef();
  useEffect(() => {
    const img = image.current;
    if (img && img.complete) {
      handleImageLoaded();
    }
  }, [handleImageLoaded]);

  return (
    <>
      {!isLoaded && <Skeleton {...props} />}
      <img
        src={src}
        alt={alt}
        ref={image}
        onLoad={handleImageLoaded}
        loading="lazy"
        {...props}
        style={{
          display: !isLoaded && "none"
        }}
      />
    </>
  );
};

export default Image;
