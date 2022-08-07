import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import whitelogo from "../../Images/WhiteLogo.png";
import Typograpghy from "../Typography/Typograpghy";
import Location from "../../Images/Location";
import PhoneCall from "../../Images/Phone-call";
import Envelope from "../../Images/envelope";
import { devices } from "../../styles/mediaQueries";
import { Container } from "../../styles/container";
import { Link } from "react-router-dom";

const Links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Our Structure",
    path: "/structure",
  },
  {
    label: "Activities",
    path: "/activities",
  },
  {
    label: "Leadership",
    path: "/leadership",
  },
  {
    label: "Organs & Clubs",
    path: "/organs&clubs",
  },
];
const Wrapper = styled.div`
  background: ${colors.primary};
  padding: 7rem 0px;
  overflow-x: hidden;
  .body {
    width: 77%;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      justify-content: space-between;
      display: flex;
      width: 70%;

      @media ${devices.phone} {
        width: 100%;
        margin-top: 2rem;
        flex-direction: column;

        > :first-child {
          padding-right: 1rem;
          margin-bottom: 4rem;
        }
      }
    }
    @media ${devices.phone} {
      width: 100%;
      padding: 0rem 1.5rem;
    }

    img {
      height: 8rem;
      width: 8rem;
    }
  }
`;

const QuickLinks = styled.div`
  li {
    margin-top: 2.5rem;
    font-size: 2.3rem;
    ::marker {
      color: ${colors.white};
    }
  }
`;

const ContactUs = styled.div`
  .contacts {
    > div {
      margin-top: 2.5rem;
      display: flex;
      svg {
        margin-right: 1rem;
        min-width: 2.4rem;
        min-height: 2.4rem;
      }
    }
  }
  max-width: 40rem;
`;

const FooterTypo = styled(Typograpghy)`
  @media ${devices.phone} {
    font-size: 1.8rem !important;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

const FooterTitle = styled(Typograpghy)`
  @media ${devices.phone} {
    font-size: 2rem !important;
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div className="body">
          <img alt="logo" src={whitelogo} />
          <div>
            <QuickLinks>
              <FooterTitle
                color={colors.white}
                size="2.6rem"
                lineHeight="2.1rem"
              >
                QuickLinks
              </FooterTitle>
              <ul className="list">
                {Links.map(({ label, path }) => {
                  return (
                    <li key={path}>
                      <Link to={path}>
                        <FooterTypo color={colors.white} size="2.3rem">
                          {label}
                        </FooterTypo>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </QuickLinks>
            <ContactUs>
              <FooterTitle
                color={colors.white}
                size="2.6rem"
                lineHeight="2.1rem"
              >
                Contact Us
              </FooterTitle>
              <div className="contacts">
                <FooterTypo color={colors.white} size="2.3rem">
                  <Location />
                  College of Health Sciences, Senate Building Rd., Obafemi
                  Awolowo University, Ile-Ife
                </FooterTypo>
                <FooterTypo color={colors.white} size="2.3rem">
                  <Envelope />
                  ifumsacohs@oauife.edu.ng
                </FooterTypo>
                <FooterTypo color={colors.white} size="2.3rem">
                  <PhoneCall />
                  +234 0813 XXX XX09
                </FooterTypo>
              </div>
            </ContactUs>
          </div>
        </div>
        <Typograpghy
          color={colors.secondary}
          size="1.8rem"
          align="center"
          mt="20.5rem"
        >
          IFUMSA ©2022. All Rights Reserved
        </Typograpghy>
      </Container>
    </Wrapper>
  );
};

export default Footer;
