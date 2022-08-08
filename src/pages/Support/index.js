import React from "react";
import { devices } from "../../styles/mediaQueries";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Typograpghy from "../../components/Typography/Typograpghy";
import { colors } from "../../styles/colors";
import { Container as BodyContainer } from "../../styles/container";

const Wrapper = styled(Container)`
  padding: 1rem 10rem;
  margin: 0rem;
  overflow-x: hidden;
  padding-bottom: 30rem;

  @media ${devices.phone} {
    padding: 1rem 2rem;
    padding-bottom: 30rem;
  }
`;

const Support = () => {
  return (
    <Wrapper fluid>
      <BodyContainer>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4.3rem"
          align="center"
          mt="4rem"
        >
          Why You Should Support Us?
        </Typograpghy>
        <Typograpghy
          size="1.8rem"
          lineHeight="2.1rem"
          align="center"
          mt="1.5rem"
        >
          Our association's greatest asset is its hardworking and creative
          members. Quite simply, when you support us, you are helping to improve
          people's health and overall well-being by helping in any community
          activities where Medical Students may assist.
          <br />
          Not only do you aid your society, but you also support the medical
          professionals that we will one day become.
          <br /> <br />
          Support us now via our bank account:
          <br />
          Account Number: 0121231019
          <br />
          Bank: Wema Bank
          <br />
          Name: Medical Students Association.
        </Typograpghy>
      </BodyContainer>
    </Wrapper>
  );
};

export default Support;
