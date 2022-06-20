import React from "react";
import { Container } from "react-bootstrap";
import picture1 from "../../Images/Home-Image.png";
import picture2 from "../../Images/Picture2.png";
import President from "../../Images/President.png";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Typograpghy from "../../components/Typography/Typograpghy";
import { Button } from "../../components/Button";
import QuoteImage from "../../Images/Quote";
import ImageScroll from "./ImageScroll";
import { Input } from "../../components/Input/Input";
import { devices } from "../../styles/mediaQueries";
import { Shine } from "../../components/Button/shine";

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;
const Picture1 = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border-bottom: 1px solid ${colors.primary};
`;
const Picture1Wrapper = styled.div`
  max-width: 96%;
  height: auto;
  margin: 0rem auto;
  padding: 2rem 0rem;
  border-bottom: 1px solid ${colors.primary};
  @media ${devices.tabport} {
    padding: 1rem 0rem;
  }
  @media ${devices.phone} {
    padding: 1rem 0rem;
  }
`;

const Picture2 = styled.img`
  height: auto;
  max-width: 38rem;

  @media ${devices.tabland} {
    max-width: 100%;
    width: 100%;
  }
  @media ${devices.phone} {
  }
`;

const Section1 = styled.div`
  width: 83%;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  @media ${devices.tabland} {
    width: 90%;
  }
  @media ${devices.tabport} {
    flex-direction: column;
    align-items: flex-start;
    > * {
      width: 100%;
    }
  }

  > :first-child {
    padding-right: 8rem;
    max-width: 70%;
    @media ${devices.tabport} {
      padding-right: 2rem;
      max-width: 100%;
    }
  }

  > :nth-child(2) {
    @media ${devices.tabport} {
      padding-top: 4rem;
    }
  }
  @media ${devices.phone} {
    width: 95%;
  }
`;

const Section2 = styled.div`
  background: ${colors.primary};
  padding: 4rem 0px;

  .content-row {
    width: 83%;
    height: 100%;
    margin: 0rem auto;
    display: flex;
    align-items: center;
    @media ${devices.tabland} {
      width: 90%;
    }
    @media ${devices.tabport} {
      flex-direction: column;
      align-items: flex-start;
    }
    
    @media ${devices.phone} {
      width: 95%;
    }
    > div {
      @media ${devices.tabport} {
        width: 100%;
      }
    }
    > :nth-child(2) {
      padding-left: 4rem;
      margin-top: 4rem;
      max-width: 70%;
      justify-self: flex-end;
      @media ${devices.tabport} {
        padding-left: 0rem;
        max-width: 100%;
      }
    }
  }
`;

const Section3 = styled.div`
  position: relative;

  .content {
    padding: 14rem 0px;
    width: 70%;
    margin: 0px auto;

    @media ${devices.tabland} {
      width: 80%;
    }
    @media ${devices.phone} {
      width: 90%;
    }
  }
  .quote {
    position: absolute;
    svg {
      height: 15rem;
      width: 15rem;
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

const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 67%;
  margin: 0px auto;
  margin-bottom: 13rem;

  button {
    margin-top: 4rem;
  }
  @media ${devices.tabland} {
    width: 80%;
  }
  @media ${devices.phone} {
    width: 90%;
  }
`;

const Home = () => {
  return (
    <Wrapper fluid>
      <Picture1Wrapper>
        <Picture1 alt="ifumsa" src={picture1} />
      </Picture1Wrapper>
      <Section1 noGutters>
        <div>
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            style={{
              marginBottom: "1.5rem",
            }}
          >
            About Us
          </Typograpghy>
          <Typograpghy>
            Obafemi Awolowo University Students’ Association, usually
            abbreviated as IFUMSA is the umbrella body of the Medical Students
            in the Obafemi Awolowo University. IFUMSA was founded in September
            1972, by the foundation students of the Faculty of Health Sciences
            (now College of Health Sciences) which was established May 8, 1972.
            The year 2022 makes it 50 years that the association has been in
            existence. We are a vibrant student body with over 700 members and
            an associated illustrious Alumni Body. The 44 seat IFUMSA
            Parliament, the leadership of the association, popularly known as
            the Student Representative Body (SRB) of IFUMSA, comprises;10
            Executive Council members whose activities are coordinated by the
            President of the Association, 30 Students’ Representative Body (SRB)
            members and; 4 Ex-Officio members, is chaired by the Speaker of the
            House
          </Typograpghy>
          <Button
            isPrimary
            style={{
              marginTop: "4rem",
            }}
          >
            Read more
            <Shine />
          </Button>
        </div>
        <div>
          <Picture2 alt="ifumsa" src={picture2} />
        </div>
      </Section1>
      <Section2>
        <div className="content-row">
          <div>
            <Picture2 alt="ifumsa" src={President} />
          </div>
          <div>
            <Typograpghy
              color={colors.secondary}
              size="3.6rem"
              lineHeight="4rem"
              style={{
                marginBottom: "1.5rem",
              }}
            >
              Welcome Message from the President
            </Typograpghy>
            <Typograpghy color={colors.white}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
              egestas ultrices. Vestibulum et neque id ex semper varius a sit
              amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
              iaculis finibus egestas. Nam viverra urna quis odio efficitur
              malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
            </Typograpghy>
            <Button
              isSecondary
              style={{
                marginTop: "4rem",
              }}
            >
              Read more
              <Shine />
            </Button>
          </div>
        </div>
      </Section2>
      <Section3>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus
            egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas
            rhoncus enim eu scelerisque rutrum.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus
            egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas
            rhoncus enim eu scelerisque rutrum.
          </Typograpghy>
        </div>
        <div className="quote down">
          <QuoteImage />
        </div>
      </Section3>
      <ImageScroll />
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

export default Home;
