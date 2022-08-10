import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Adeyemo from "../../Images/Adeyemo.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "../../styles/container";

SwiperCore.use([Autoplay]);
const data = [
  {
    image: Adeyemo,
    name: "Dr Akinmade Fisayo",
    words:
      "I count myself lucky to have been associated with IFUMSA both by being an Ife med student and also intentionally by being active in various roles during my time as a great Ife student. IFUMSA prepared me for leadership roles, human capital development, public speaking and most importantly understanding the relevance of being in a team. Seeing that the association is growing from strength to strength even years after my time is a testament to the great institutional values of IFUMSA",
  },
];
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .swiper-button-next,
  .swiper-button-prev {
    color: #faffbf;
    :after {
      font-size: 4rem !important;
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

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  border-radius: 15px;
  margin: auto;
`;
const ImageWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  margin: 0px auto;
`;
const ImageScroll = ({photos}) => {
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
                  <Image src={photo} />
                </ImageWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default ImageScroll;
