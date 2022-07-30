import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as IfumsaLogo } from "../../Images/IFUMSA LOGO.svg";
import Typograpghy from "../Typography/Typograpghy";
import { colors } from "../../styles/colors";
import { devices } from "../../styles/mediaQueries";
import { useOnClickOutside } from "./utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "../../styles/container";

const NavsData = [
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
  z-index: 5000;
  position: sticky;
  top: 0px;

  .logo {
    @media ${devices.phone} {
      max-width: 8rem;
      height: auto;
    }
  }
  .active--link {
    color: ${colors.secondary};
  }
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
  width: 100vw;
  height: 100%;
  left: 0px;
  position: absolute;
  background: ${colors.primary};
  z-index: 999;
  top: 10rem;
  padding-bottom: 10rem;
  padding-left: 10%;
  padding-top: 5rem;
  flex-direction: column;
  transition: all 0.5s;
  transform: translateY(-100%);
  display: flex;
  bottom: 0px;
  > * {
    padding: 2rem 0rem;
  }

  @media ${devices.tabport} {
    transform: ${({ isMobileNav }) => (isMobileNav ? "translateY(0)" : "")};
  }
  @media only screen and (min-width: 37.5em) {
    display: none;
  }
`;
const SubWrapper = styled.div`
  background: ${colors.primary};
  .links:not(:last-child) {
    margin-right: 4rem;
  }
  > div {
    display: flex;
    align-items: center;
    padding: 1rem 3rem;
    max-width: 1440px;
    justify-content: flex-end;
    margin: auto;
  }
`;

const ToggleIcon = styled.div`
  position: relative;
  opacity: 1;
  &,
  &::before,
  &::after {
    width: 3rem;
    height: 0.2rem;
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
const Header = ({ isMobileNav, setIsMobileNav }) => {
  const node = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname)
  useOnClickOutside(node, () => setIsMobileNav(false));
  const onToggleMobileNav = useCallback(() => {
    if (!isMobileNav) {
      setIsMobileNav(true);
    } else setIsMobileNav(false);
  }, [isMobileNav, setIsMobileNav]);
  const changeRoute = useCallback(
    (path) => {
      navigate(path);
      setIsMobileNav(false);
    },
    [navigate, setIsMobileNav]
  );
  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <IfumsaLogo className="logo" />
          <NavsWrapper>
            {NavsData.map(({ label, path }) => {
              return (
                <Link to={path} key={path}>
                  <Typograpghy   color={path !== pathname ? colors.primary : colors.secondary}>{label}</Typograpghy>
                </Link>
              );
            })}
          </NavsWrapper>
          <ToggleIcon onClick={onToggleMobileNav} isMobileNav={isMobileNav} />
        </Wrapper>
      </Container>
      <SubWrapper>
        <div>
          {subHeaderData.map(({ label, path }) => {
            return (
              <Link to={path} key={path} className="links">
                <Typograpghy
                  color={path !== pathname ? colors.white : colors.secondary}
                >
                  {label}
                </Typograpghy>
              </Link>
            );
          })}
        </div>
      </SubWrapper>
      <MobileNav isMobileNav={isMobileNav}>
        {NavsData.map(({ label, path }) => {
          return (
            <Typograpghy
              onClick={() => changeRoute(path)}
              key={path}
              color={path !== pathname ? colors.white : colors.secondary}
              size="2.3rem"
            >
              {label}
            </Typograpghy>
          );
        })}
      </MobileNav>
    </React.Fragment>
  );
};

export default Header;
