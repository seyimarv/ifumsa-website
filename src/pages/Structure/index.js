import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import ActivitiesImage from "../../Images/ActivitiesImage.png";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";

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

const EachSection = styled.div`
  padding: 4rem 6rem;

  :last-child{
    padding-bottom: 10rem;
}


@media ${devices.phone} {
    padding: 2rem 2rem
}
`;

function index() {
  return (
    <Wrapper fluid>
      <Section1>
        <Picture src={AboutImage} />
        <Typograpghy
          color={colors.secondary}
          size="6.4rem"
          lineHeight="7.8rem"
          className="text"
        >
          Our Structure
        </Typograpghy>
      </Section1>
      <EachSection>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          align="center"
        >
          Executive Arm
        </Typograpghy>
        <Typograpghy color={colors.primary} align="center" lineHeight='2.4rem' style={{padding:"2rem 0"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
          Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim
          eu scelerisque rutrum.
        </Typograpghy>
        <Picture src={ActivitiesImage}/>
      </EachSection>
      <EachSection>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          align="center"
        >
          Legislative Arm
        </Typograpghy>
        <Typograpghy color={colors.primary} align="center" lineHeight='2.4rem' style={{padding:"2rem 0"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
          Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim
          eu scelerisque rutrum.
        </Typograpghy>
        <Picture src={ActivitiesImage}/>
      </EachSection>
    </Wrapper>
  );
}

export default index;
