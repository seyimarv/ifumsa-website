import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import QuoteImage from "../../Images/Quote";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input/Input";
import { Shine } from "../../components/Button/shine";


const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture = styled.img`
  height: 100%;
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

function index() {
  return (
    
    <Wrapper>
<Section1>
    <Picture src={AboutImage}/>
</Section1>
    </Wrapper>
  )
}

export default index