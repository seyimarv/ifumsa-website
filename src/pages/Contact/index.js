/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import GoogleMap from "../../components/GoogleMap"
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import { Button } from "../../components/Button";
import { Shine } from "../../components/Button/shine";
import { Input } from "../../components/Input/Input";

// const location = {
//     address: "SPECTRA RESTAURANT, GG8G+J84, Obafemi Awolowo University, behind college of health sciences car park, 220005, Ife",
//     lat: "7.5165",
//     lng: "4.5258",
// }

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture = styled.img`
  height: auto;
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
  padding: 3rem 6rem;
  align-items: center;

  .form-section {
    padding: 5rem 6rem 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 3rem;

    @media ${devices.phone} {
      padding: 2rem 0 2rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 1rem;
    }
  }

  .form-left {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 1.5rem;
  }

  .button {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const Section3 = styled.div`
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

const MessageBox = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
  border: 1px solid ${colors.primary};
  ::placeholder {
    color: ${colors.primary};
    font-weight: 500;
  }
`;

function index() {
  return (
    <Wrapper fluid>
      <Section1>
        <Picture src={AboutImage} />
        <Typograpghy
          color={colors.secondary}
          size="6.4rem"
          lineHeight="7.8rem"
          className="text"
        >
          Contact Us
        </Typograpghy>
      </Section1>

      <Section2>
        <Typograpghy
          color={colors.secondary}
          align="center"
          size="3.6rem"
          mt="6rem"
          lineHeight="4.3rem"
        >
          Get In Touch With Us
        </Typograpghy>
        <div className="form-section">
          <div className="form-left">
            <Input placeholder="Name" color={colors.primary} coloredBorder />
            <Input placeholder="Email" color={colors.primary} coloredBorder />
            <Input placeholder="Subject" color={colors.primary} coloredBorder />
          </div>
          <div className="form-right">
            <MessageBox placeholder="Message" />
          </div>
        </div>
        <div className="button">
          <Button isPrimary>
            Send Message <Shine />
          </Button>
        </div>
      </Section2>

      <Section3>
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
      </Section3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.534469638717!2d4.523631014930581!3d7.516529112907151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103830d95c1720d1%3A0xf29f9240540306ec!2sSPECTRA%20RESTAURANT!5e0!3m2!1sen!2sng!4v1655746689341!5m2!1sen!2sng"
        width="100%"
        height="728"
        frameBorder="0"
        allowFullScreen=""
      />
    </Wrapper>
  );
}

export default index;
