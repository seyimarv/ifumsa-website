import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import QuoteImage from "../../Images/Quote";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input/Input";
import { Shine } from "../../components/Button/shine";

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture1 = styled.img`
  height: 100%;
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

const Section2 = styled.div`
  position: relative;

  .content {
    padding: 14rem 21.8rem;
    @media ${devices.tabland} {
      padding: 14rem 10rem;
    }
    @media ${devices.phone} {
      padding: 14rem 4rem;
    }
  }
  .quote {
    position: absolute;
    svg {
      height: 15rem;
      width: 15rem;

      @media ${devices.phone} {
      width: 12rem;
      height: 12rem;
    }
    }
  }
  .up {
    top: 1.5rem;
    left: 1.5rem;
  }
  .down {
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

const Section3 = styled.div`
  background: ${colors.primary};
  padding: 10rem 20.2rem;
  @media ${devices.tabland} {
    padding: 10rem 10rem;
  }
  @media ${devices.phone} {
    padding: 10rem 4rem;
  }
  .buttons {
    justify-content: space-between;
    display: flex;
    width: 70%;
    margin: 0px auto;
    margin-top: 4rem;

    @media ${devices.tabland} {
      width: 80%;
    }
    @media ${devices.tabport} {
      width: 100%;
    }

    @media ${devices.phone} {
      flex-direction: column;

      > button {
        font-size: 1.8rem;
        padding: 1.4rem 1rem;

        :nth-child(2) {
          margin-top: 2rem;
        }
      }
    }
  }
`;
const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 25rem;
  margin-bottom: 13rem;

  button {
    margin-top: 4rem;
  }
  @media ${devices.tabland} {
    padding: 0rem 10rem;
  }
  @media ${devices.phone} {
    padding: 0rem 4rem;
  }
`;
const About = () => {
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
          About IFUMSA
        </Typograpghy>
      </Section1>
      <Section2>
        <div className="quote up">
          <QuoteImage />
        </div>
        <div className="content">
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            style={{
              marginBottom: "3.6rem",
            }}
            align="center"
          >
            Our Vision
          </Typograpghy>
          <Typograpghy color={colors.primary} align="center">
            Our primary focus is to cater for the general welfare and interest
            of all Medical Students of the Obafemi Awolowo University, Ile-Ife
            as well as to contribute to the upliftment of the health conditions
            and general welfare of the people by rendering assistance in all
            community programs where Medical Students can be of help. We have
            been able to achieve numerous counts of this through our society
            alleviation programs, rallies, summits, outreaches, symposia,
            lectures and social events. Some of these are the Save Our Teachers
            Movement, Depression talks, Rally against Female Genital Mutilation
            and many more.
            <br />
            <br />
            We not only do this to help the society, we do this to help the
            doctor we are all going to become.
          </Typograpghy>
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            style={{
              margin: "3.6rem",
            }}
            align="center"
          >
            Our Mission
          </Typograpghy>
          <Typograpghy color={colors.primary} align="center">
            As an affiliate member of the Nigerian Medical Association (NMA)
            through the Nigerian Medical Students’ Association (NiMSA) as well
            as registered member of the International Federation of Medical
            Students’ Associations (IFMSA) and the Federation Of African Medical
            Students’ Association (FAMSA), we are committed to taking the good
            service of Medicine around the globe without any limit.
          </Typograpghy>
        </div>
        <div className="quote down">
          <QuoteImage />
        </div>
      </Section2>
      <Section3>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          style={{
            margin: "3.6rem",
          }}
          align="center"
        >
          Brief History of IFUMSA
        </Typograpghy>
        <Typograpghy color={colors.white} align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra eget
          dui pretium semper est quis. At cursus scelerisque mauris diam sit.
          Vel odio sit nisi et pulvinar et ut. Nisl cras vel et vel facilisis
          sed ridiculus nisi, diam. Elementum scelerisque in tristique nunc
          convallis molestie habitasse habitasse. Egestas convallis et sed
          semper nisi ac quam amet. Ligula eget pretium egestas vivamus ut nisi
          enim scelerisque diam. Magnis magna sodales a non. Porta viverra nunc,
          <br /> <br /> odio magna ut turpis neque orci amet. Turpis enim
          vivamus netus dictum. Quis ac aliquet gravida et condimentum. Rhoncus
          mattis purus varius quam sit vel aenean. Sollicitudin fames facilisis
          viverra feugiat. Vulputate mattis sit curabitur erat semper purus.
          Quam sed dolor, nec eu sollicitudin at. Arcu posuere mattis sed rutrum
          arcu elit leo, mauris
        </Typograpghy>
        <div className="buttons">
          <Button isSecondary>
            Read more {">>"} <Shine />
          </Button>
          <Button isGhost>
            Download Constitution <Shine />
          </Button>
        </div>
      </Section3>
      <Section4>
        <Typograpghy
          color={colors.secondary}
          align="center"
          size="3.6rem"
          mt="13rem"
          mb="5.8rem"
          lineHeight="4.3rem"
        >
          Sign up for IFUMSA newsletter
        </Typograpghy>
        <Input
          placeholder="Your Email Here..."
          color={colors.primary}
          background={colors.gray2}
        />
        <Button isPrimary>
          Sign up <Shine />
        </Button>
      </Section4>
    </Wrapper>
  );
};

export default About;
