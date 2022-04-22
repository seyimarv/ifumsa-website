import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import whitelogo from "../../Images/WhiteLogo.png";
import Typograpghy from "../Typography/Typograpghy";
import Location from "../../Images/Location";
import PhoneCall from "../../Images/Phone-call";
import Envelope from "../../Images/envelope";

const Links = [
  {
    label: "Home",
    path: "/home",
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
  {
    label: "Mediprenuers",
    path: "/mediprenuers",
  },
];
const Wrapper = styled.div`
  background: ${colors.primary};
  padding: 7rem 0px;

  .body {
    width: 77%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;

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

const Footer = () => {
  return (
    <Wrapper>
      <div className="body">
        <img alt="logo" src={whitelogo} />
        <QuickLinks>
          <Typograpghy color={colors.white} size="2.6rem" lineHeight="2.1rem">
            QuickLinks
          </Typograpghy>
          <ul className="list">
            {Links.map(({ label, path }) => {
              return (
                <li>
                  <Typograpghy color={colors.white} size="2.3rem">
                    {label}
                  </Typograpghy>
                </li>
              );
            })}
          </ul>
        </QuickLinks>
        <ContactUs>
          <Typograpghy color={colors.white} size="2.6rem" lineHeight="2.1rem">
            Contact Us
          </Typograpghy>
          <div className="contacts">
            <Typograpghy color={colors.white} size="2.3rem">
              <Location />
              College of Health Sciences, Senate Building Rd., Obafemi Awolowo
              University, Ile-Ife
            </Typograpghy>
            <Typograpghy color={colors.white} size="2.3rem">
              <Envelope />
              ifumsacohs@oauife.edu.ng
            </Typograpghy>
            <Typograpghy color={colors.white} size="2.3rem">
              <PhoneCall />
              +234 0813 XXX XX09
            </Typograpghy>
          </div>
        </ContactUs>
      </div>
      <Typograpghy
        color={colors.secondary}
        size="1.8rem"
        align="center"
        mt="20.5rem"
      >
        IFUMSA ©2022. All Rights Reserved
      </Typograpghy>
    </Wrapper>
  );
};

export default Footer;
