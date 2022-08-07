import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "../ScrollToTop";

const MainPanel = ({ children }) => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <ScrollToTop>
      <Header isMobileNav={isMobileNav} setIsMobileNav={setIsMobileNav} />
      <Body isMobileNav={isMobileNav}>
        {children}
        <Footer />
      </Body>
    </ScrollToTop>
  );
};

export default MainPanel;

const Body = styled.div`
  overflow-y: ${({ isMobileNav }) => (isMobileNav ? "hidden" : "")};
  height: ${({ isMobileNav }) => (isMobileNav ? "85vh" : "")};
`;
