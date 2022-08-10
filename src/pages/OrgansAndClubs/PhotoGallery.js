import React from "react";
import styled from "styled-components";
import { devices } from "../../styles/mediaQueries";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import Image from "../../components/ImageComponent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Autoplay]);
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .swiper-button-next,
  .swiper-button-prev {
    color: #faffbf;
    :after {
      font-size: 2.5rem !important;
    }
    ${
      "" /* .swiper-button-next {
      background-image: url(${NextIcon});
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
    } */
    }
  }

  > div {
    width: 85%;
    margin: 0px auto;

    @media ${devices.phone} {
      width: 95%;
    }
  }

  .body {
    width: 80%;
    margin: 0px auto;

    @media ${devices.phone} {
      width: 100%;
    }
  }
`;

const EachImage = styled(Image)`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  margin: auto;
  layout: fill;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 40.7rem;
  margin: 0px auto;

  @media ${devices.tabport} {
    width: 100%;
    min-height: 30rem;
    margin-top: 5rem;
  }
`;
const ImageScroll = ({ photos }) => {
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {photos?.map((photo, index) => {
          return (
            <SwiperSlide key={index}>
              <ImageWrapper>
                <EachImage src={photo} />
              </ImageWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default ImageScroll;
