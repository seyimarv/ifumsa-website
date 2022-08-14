import React from "react";
import { colors } from "../../styles/colors";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import AboutImage from "../../Images/about.png";
import { Committee, Council } from "./utils";
import Image from "../../components/ImageComponent";
import Transitions from "../../components/pageTransitions";

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture1 = styled(Image)`
  min-height: 10rem;
  width: 100%;
  object-fit: cover;
`;

const Section1 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media ${devices.tabport} {
      font-size: 4rem;
      line-height: 4rem;
    }
    @media ${devices.phone} {
      font-size: 3rem;
      line-height: 3rem;
    }
  }
`;

const GridContainer = styled.div`
  padding: 2rem 0rem;
  margin: 0rem 7.5rem;

  @media ${devices.phone} {
    margin: 0rem 2rem;
  }
  .grid {
    padding-top: 1rem;
    padding-bottom: 7rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.8rem;
    padding-top: 3rem;
    justify-content: center;
  }
  :not(:last-child) {
    border-bottom: 1px solid ${colors.primary};
  }
  :not(:first-child) {
    padding-top: 6rem;
  }
`;

const Member = styled.div`
  width: 28rem;

  .image {
    min-height: 34.9rem;
  }
  img {
    width: 100%;
    height: 34.9rem;
    border-radius: 1.1rem;
  }
  @media ${devices.phone} {
    width: 100%;
    margin-bottom: 3rem;

    img {
      height: auto;
    }
  }
`;

const Leadership = () => {
  return (
    <Transitions>
      <Wrapper fluid>
        <Section1>
          <Picture1 src={AboutImage} />
          <Typograpghy
            color={colors.secondary}
            size="6.4rem"
            lineHeight="7.8rem"
            className="text"
          >
            Leadership
          </Typograpghy>
        </Section1>
        <GridContainer>
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4.3rem"
            className="text"
            align="center"
          >
            Executive Council
          </Typograpghy>
          <div className="grid">
            {Council.map((data) => {
              return (
                <Member>
                  <Image
                    alt="ima"
                    src={data.image}
                    key={data.name}
                    className="image"
                  />
                  <Typograpghy
                    size="2.1rem"
                    lineHeight="2.6rem"
                    fontWeight="700"
                    mt="1.7rem"
                  >
                    {data.name}
                  </Typograpghy>
                  <Typograpghy
                    mt="1.4rem"
                    lineHeight="2rem"
                    size="1.7rem"
                    fontWeight="500"
                  >
                    {data.title}
                  </Typograpghy>
                </Member>
              );
            })}
          </div>
        </GridContainer>
        {/* <GridContainer>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4.3rem"
          className="text"
          align="center"
        >
          SRB Leadership
          <div className="grid">
            {SRBleadership.map((data) => {
              return (
                <Member>
                  <img alt="ima" src={data.image} key={data.title} />
                  <Typograpghy
                    size="2.1rem"
                    lineHeight="2.6rem"
                    fontWeight="700"
                    mt="1.7rem"
                  >
                   {data.name}
                  </Typograpghy>
                  <Typograpghy
                    mt="1.4rem"
                    lineHeight="2rem"
                    size="1.7rem"
                    fontWeight="500"
                  >
                    {data.title}
                  </Typograpghy>
                </Member>
              );
            })}
          </div>
        </Typograpghy>
      </GridContainer> */}
        <GridContainer>
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4.3rem"
            className="text"
            align="center"
          >
            Commitee
            <div className="grid">
              {Committee.map((data) => {
                return (
                  <Member>
                    <img alt="ima" src={data.image} key={data.role} />
                    <Typograpghy
                      size="2.1rem"
                      lineHeight="2.6rem"
                      fontWeight="700"
                      mt="1.7rem"
                    >
                      {data.name}
                    </Typograpghy>
                    <Typograpghy
                      mt="1.4rem"
                      lineHeight="2rem"
                      size="1.7rem"
                      fontWeight="500"
                    >
                      {data.role}
                    </Typograpghy>
                  </Member>
                );
              })}
            </div>
          </Typograpghy>
        </GridContainer>
      </Wrapper>
    </Transitions>
  );
};

export default Leadership;
