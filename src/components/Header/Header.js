import React from "react";
import styled from "styled-components";
import { ReactComponent as IfumsaLogo } from "../../Images/IFUMSA LOGO.svg";
import Typograpghy from "../Typography/Typograpghy";
import { colors } from "../../styles/colors";

const NavsData = [
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

const subHeaderData = [
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Support Us",
    path: "/support",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  justify-content: space-between;
`;
const NavsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  background: ${colors.primary};
  justify-content: flex-end;

  div:not(:last-child) {
      margin-right: 4rem;
  }
`;
const Header = () => {
  return (
    <>
      <Wrapper>
        <IfumsaLogo />
        <NavsWrapper>
          {NavsData.map(({ label, path }) => {
            return <Typograpghy>{label}</Typograpghy>;
          })}
        </NavsWrapper>
      </Wrapper>
      <SubWrapper>
        {subHeaderData.map(({ label, path }) => {
          return <Typograpghy color={colors.white}>{label}</Typograpghy>;
        })}
      </SubWrapper>
    </>
  );
};

export default Header;
