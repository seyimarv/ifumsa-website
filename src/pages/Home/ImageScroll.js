import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Typograpghy from "../../components/Typography/Typograpghy";
import NotableAlumni1 from "../../Images/NotableAlumni.png";
import { devices } from "../../styles/mediaQueries";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [1, 2, 3, 4];
const Wrapper = styled.div`
  padding: 10rem 0rem;
  background: ${colors.primary};
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
    ${'' /* .swiper-button-next {
      background-image: url(${NextIcon});
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
    } */}
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
  width: 30rem;
  height: 30rem;
`;
const ImageWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  margin: 0px auto;
`;
const ImageScroll = () => {
  return (
    <Wrapper>
      <div>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          style={{
            marginBottom: "6rem",
          }}
          align="center"
        >
          Testimonies from Reputable Alumni
        </Typograpghy>
        <div className="d-flex">
          {/* <IconWrapper>
            <PrevIcon />
          </IconWrapper> */}
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data.map((data) => {
              return (
                <SwiperSlide>
                  {" "}
                  <div className="body">
                    <ImageWrapper>
                      <Image src={NotableAlumni1} />
                    </ImageWrapper>
                    <Typograpghy
                      color={colors.white}
                      size="3.6rem"
                      lineHeight="4rem"
                      style={{
                        marginBottom: "4.9rem",
                      }}
                      align="center"
                    >
                      Dr. Lorem Ipsum
                    </Typograpghy>
                    <Typograpghy color={colors.white} align="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec ligula nibh, interdum non enim sit amet, iaculis
                      aliquet nunc. Class aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos.
                      Aliquam sit amet ipsum ac velit egestas ultrices.
                      Vestibulum et neque id ex semper varius a sit amet metus.
                      Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis
                      finibus egestas. Nam viverra urna quis odio efficitur
                      malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
                    </Typograpghy>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* <IconWrapper>
            <NextIcon />
          </IconWrapper> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageScroll;
