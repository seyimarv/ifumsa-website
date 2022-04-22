import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as IfumsaLogo } from "../../Images/IFUMSA LOGO.svg";
import Typograpghy from "../Typography/Typograpghy";
import { colors } from "../../styles/colors";
import { devices } from "../../styles/mediaQueries";
import { useOnClickOutside } from "./utils";

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
  background: ${colors.white};
  z-index: 998;
  position: sticky;
  top: 0px;
`;
const NavsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media ${devices.tabport} {
    display: none;
  }
`;

const MobileNav = styled.div`
  width: 60vw;
  height: 100%;
  left: 0px;
  position: fixed;
  background: ${colors.white};
  z-index: 999;
  top: 0px;
  padding-bottom: 10rem;
  padding-left: 10%;
  padding-top: 5rem;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.5s;
  transform: translateX(-100%);
  display: flex;

  @media ${devices.tabport} {
    transform: ${({ isMobileNav }) => (isMobileNav ? "translateX(0)" : "")};
  }
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

const ToggleIcon = styled.div`
  position: relative;
  opacity: 1;
  &,
  &::before,
  &::after {
    width: 4rem;
    height: 2px;
    background-color: ${colors.primary};
    z-index: 1200;
    display: none;
    @media ${devices.tabport} {
      display: inline-block;
    }
  }
  & {
    background-color: ${(props) => (props.isMobileNav ? "transparent" : "")};
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.2s;
    top: 0px;
  }
  &::before {
    top: ${(props) => (props.isMobileNav ? "0" : "-.8rem")};
    transform: ${(props) => (props.isMobileNav ? "rotate(135deg)" : "")};
  }
  &::after {
    top: ${(props) => (props.isMobileNav ? "0" : ".8rem")};
    transform: ${(props) => (props.isMobileNav ? "rotate(-135deg)" : "")};
  }
`;
const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setIsMobileNav(false));
  const onToggleMobileNav = useCallback(() => {
    if (!isMobileNav) {
      setIsMobileNav(true);
    } else setIsMobileNav(false);
  }, [isMobileNav]);
  return (
    <React.Fragment ref={node}>
        <Wrapper>
          <IfumsaLogo />
          <NavsWrapper>
            {NavsData.map(({ label, path }) => {
              return <Typograpghy>{label}</Typograpghy>;
            })}
          </NavsWrapper>
          <ToggleIcon onClick={onToggleMobileNav} isMobileNav={isMobileNav} />
        </Wrapper>
      <SubWrapper>
        {subHeaderData.map(({ label, path }) => {
          return <Typograpghy color={colors.white}>{label}</Typograpghy>;
        })}
      </SubWrapper>
      <MobileNav isMobileNav={isMobileNav} ref={node}>
        <IfumsaLogo />
        {NavsData.map(({ label, path }) => {
          return <Typograpghy>{label}</Typograpghy>;
        })}
      </MobileNav>
    </React.Fragment>
  );
};

export default Header;
