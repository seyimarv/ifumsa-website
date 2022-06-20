import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainPanel = ({ children }) => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <>
      <Body isMobileNav={isMobileNav}>
        <Header isMobileNav={isMobileNav} setIsMobileNav={setIsMobileNav} />

        {children}
        <Footer />
      </Body>
    </>
  );
};

export default MainPanel;

const Body = styled.div`
  overflow-y: ${({ isMobileNav }) => (isMobileNav ? "hidden" : "")};
  height: 100vh;
`;
