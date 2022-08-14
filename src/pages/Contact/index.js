/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import GoogleMap from "../../components/GoogleMap"
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import ContactForm from "./contactform";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Image from "../../components/ImageComponent";
import Transitions from "../../components/pageTransitions";

const {
  REACT_APP_MAILCHIMP_API,
  REACT_APP_MAILCHIMP_U,
  REACT_APP_MAILCHIMP_ID,
} = process.env;
const url = `${REACT_APP_MAILCHIMP_API}?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture = styled(Image)`
  height: auto;
  width: 100%;
  min-height: 10rem;
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

  @media ${devices.phone} {
    padding: 3rem 2rem;
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

const Index = () => {
  return (
    <Transitions>
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
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <ContactForm
                status={status}
                message={message}
                onValidated={subscribe}
              />
            )}
          />
        </Section2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.534469638717!2d4.523631014930581!3d7.516529112907151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf4a59b9cfc43153!2sCollege%20of%20Health%20Sciences!5e0!3m2!1sen!2sng!4v1656160250577!5m2!1sen!2sng"
          width="100%"
          height="728"
          frameBorder="0"
          allowFullScreen=""
        />
      </Wrapper>
    </Transitions>
  );
};

export default Index;
