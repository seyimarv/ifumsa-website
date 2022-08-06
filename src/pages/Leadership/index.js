import React from "react";
import { colors } from "../../styles/colors";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import AboutImage from "../../Images/about.png";
import President from "../../Images/President.png";
import { Council } from "./utils";

const array = [1, 2, 3, 4, 5, 6];

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture1 = styled.img`
  min-height: 10rem;
  width: 100%;
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
  img {
    width: 100%;
    height: auto;
    border-radius: 1.1rem;
  }
`;

const Leadership = () => {
  return (
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
                <img alt="ima" src={data.image} key={data.name} />
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
      <GridContainer>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4.3rem"
          className="text"
          align="center"
        >
          SRB Leadership
          <div className="grid">
            {array.map((data) => {
              return (
                <Member>
                  <img alt="ima" src={President} key={data} />
                  <Typograpghy
                    size="2.1rem"
                    lineHeight="2.6rem"
                    fontWeight="700"
                    mt="1.7rem"
                  >
                    Akinlolu Akinteye
                  </Typograpghy>
                  <Typograpghy
                    mt="1.4rem"
                    lineHeight="2rem"
                    size="1.7rem"
                    fontWeight="500"
                  >
                    President
                  </Typograpghy>
                </Member>
              );
            })}
          </div>
        </Typograpghy>
      </GridContainer>
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
            {array.map((data) => {
              return (
                <Member>
                  <img alt="ima" src={President} key={data} />
                  <Typograpghy
                    size="2.1rem"
                    lineHeight="2.6rem"
                    fontWeight="700"
                    mt="1.7rem"
                  >
                    Akinlolu Akinteye
                  </Typograpghy>
                  <Typograpghy
                    mt="1.4rem"
                    lineHeight="2rem"
                    size="1.7rem"
                    fontWeight="500"
                  >
                    President
                  </Typograpghy>
                </Member>
              );
            })}
          </div>
        </Typograpghy>
      </GridContainer>
    </Wrapper>
  );
};

export default Leadership;
