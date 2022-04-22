import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
  width: 96%;
  height: 80rem;
  margin: 0rem auto;
  padding: 2rem 0rem;
  border-bottom: 1px solid ${colors.primary};
`;

const Picture2 = styled.img`
  height: 40rem;
  width: 38rem;
`;

const Section1 = styled(Row)`
  width: 83%;
  margin: 4rem auto;
`;

const Section2 = styled.div`
  background: ${colors.primary};
  padding: 4rem 0px;

  .row {
    width: 83%;
    height: 100%;
    margin: 0rem auto;
  }
`;

const Section3 = styled.div`
  position: relative;

  .content {
    padding: 14rem 0px;
    width: 70%;
    margin: 0px auto;
  }
  .quote {
    position: absolute;
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
`;


const Home = () => {
  return (
    <Wrapper fluid>
      <Picture1Wrapper>
        <Picture1 alt="ifumsa" src={picture1} />
      </Picture1Wrapper>
      <Section1 noGutters>
        <Col
          lg={8}
          style={{
            marginTop: "4rem",
            paddingRight: "8rem",
          }}
        >
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus
            egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas
            rhoncus enim eu scelerisque rutrum.
          </Typograpghy>
          <Button
            isPrimary
            style={{
              marginTop: "4rem",
            }}
          >
            Read more
          </Button>
        </Col>
        <Col>
          <Picture2 alt="ifumsa" src={picture2} />
        </Col>
      </Section1>
      <Section2>
        <Row>
          <Col lg={4}>
            <Picture2 alt="ifumsa" src={President} />
          </Col>
          <Col
            lg={8}
            style={{
              marginTop: "4rem",
              paddingLeft: "8rem",
            }}
          >
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
            </Button>
          </Col>
        </Row>
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
        >
          Sign up for IFUMSA newsletter
        </Typograpghy>
        <Input
          placeholder="Your Email Here..."
          color={colors.primary}
          background={colors.gray2}
        />
        <Button isPrimary>Sign up</Button>
      </Section4>
    </Wrapper>
  );
};

export default Home;
