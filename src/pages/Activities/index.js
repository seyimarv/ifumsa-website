import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import ActivitiesImg1 from "../../Images/ActivitiesImg1.png";
import ActivitiesImg2 from "../../Images/ActivitiesImg2.png";
import ActivitiesImg3 from "../../Images/ActivitiesImg3.png";
import ActivitiesImg4 from "../../Images/ActivitiesImg4.png";
import ActivitiesImg5 from "../../Images/ActivitiesImg5.png";
import ActivitiesImg6 from "../../Images/ActivitiesImg6.png";
import ActivitiesImg7 from "../../Images/ActivitiesImg7.png";
import ActivitiesImg8 from "../../Images/ActivitiesImg8.png";
import ActivitiesImg9 from "../../Images/ActivitiesImg9.png";
import ActivitiesImg10 from "../../Images/ActivitiesImg10.png";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import { Button } from "../../components/Button";
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

const EachSection = styled.div`
  padding: 2rem 4rem;

  @media ${devices.tabport} {
    padding: 2rem 2rem;
  }
  @media ${devices.phone} {
    padding: 2rem 2rem;
  }

  .image-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;

    @media ${devices.phone} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 15px;
    }
  }

  .grid-right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  .button {
    padding: 2rem 0;
    width: 40rem;
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
          Our Activities
        </Typograpghy>
      </Section1>
      <EachSection>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          align="center"
          style={{ padding: "4rem 0 2rem" }}
        >
          Social Activities
        </Typograpghy>

        <div className="image-container">
          <Picture src={ActivitiesImg1} />
          <div className="grid-right">
            <Picture src={ActivitiesImg2} />
            <Picture src={ActivitiesImg3} />
            <Picture src={ActivitiesImg4} />
            <Picture src={ActivitiesImg5} />
          </div>
        </div>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="3.6rem"
          style={{ paddingTop: "4rem" }}
        >
          <span>IFUMSA Alumni Relations Committee</span>, consectetur adipiscing
          elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet
          nunc. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
          egestas ultrices. Vestibulum et neque id ex semper varius a sit amet
          metus. Vivamus congue dolor e
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
      </EachSection>
      <EachSection>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          align="center"
          style={{ padding: "4rem 0 2rem" }}
        >
          Sports Activities
        </Typograpghy>

        <div className="image-container">
          <Picture src={ActivitiesImg6} />
          <div className="grid-right">
            <Picture src={ActivitiesImg2} />
            <Picture src={ActivitiesImg3} />
            <Picture src={ActivitiesImg4} />
            <Picture src={ActivitiesImg5} />
          </div>
        </div>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="3.6rem"
          style={{ paddingTop: "4rem" }}
        >
          <span>IFUMSA Alumni Relations Committee</span>, consectetur adipiscing
          elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet
          nunc. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
          egestas ultrices. Vestibulum et neque id ex semper varius a sit amet
          metus. Vivamus congue dolor e
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
      </EachSection>
      <EachSection>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          align="center"
          style={{ padding: "4rem 0 2rem" }}
        >
          Outreaches
        </Typograpghy>

        <div className="image-container">
          <Picture src={ActivitiesImg7} />
          <div className="grid-right">
            <Picture src={ActivitiesImg2} />
            <Picture src={ActivitiesImg3} />
            <Picture src={ActivitiesImg4} />
            <Picture src={ActivitiesImg5} />
          </div>
        </div>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="3.6rem"
          style={{ paddingTop: "4rem" }}
        >
          <span>IFUMSA Alumni Relations Committee</span>, consectetur adipiscing
          elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet
          nunc. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
          egestas ultrices. Vestibulum et neque id ex semper varius a sit amet
          metus. Vivamus congue dolor e
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
      </EachSection>
      <EachSection>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          align="center"
          style={{ padding: "4rem 0 2rem" }}
        >
          Academic Activities
        </Typograpghy>

        <div className="image-container">
          <Picture src={ActivitiesImg8} />
          <div className="grid-right">
            <Picture src={ActivitiesImg2} />
            <Picture src={ActivitiesImg3} />
            <Picture src={ActivitiesImg4} />
            <Picture src={ActivitiesImg5} />
          </div>
        </div>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="3.6rem"
          style={{ paddingTop: "4rem" }}
        >
          <span>IFUMSA Alumni Relations Committee</span>, consectetur adipiscing
          elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet
          nunc. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
          egestas ultrices. Vestibulum et neque id ex semper varius a sit amet
          metus. Vivamus congue dolor e
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
      </EachSection>
      <EachSection>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          align="center"
          style={{ padding: "4rem 0 2rem" }}
        >
          Health Week
        </Typograpghy>

        <div className="image-container">
          <Picture src={ActivitiesImg9} />
          <div className="grid-right">
            <Picture src={ActivitiesImg2} />
            <Picture src={ActivitiesImg3} />
            <Picture src={ActivitiesImg4} />
            <Picture src={ActivitiesImg5} />
          </div>
        </div>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="3.6rem"
          style={{ paddingTop: "4rem" }}
        >
          <span>IFUMSA Alumni Relations Committee</span>, consectetur adipiscing
          elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet
          nunc. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
          egestas ultrices. Vestibulum et neque id ex semper varius a sit amet
          metus. Vivamus congue dolor e
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
      </EachSection>
      <EachSection>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          align="center"
          style={{ padding: "4rem 0 2rem" }}
        >
          Entrepreneurship {"&"} Economic
        </Typograpghy>

        <div className="image-container">
          <Picture src={ActivitiesImg10} />
          <div className="grid-right">
            <Picture src={ActivitiesImg2} />
            <Picture src={ActivitiesImg3} />
            <Picture src={ActivitiesImg4} />
            <Picture src={ActivitiesImg5} />
          </div>
        </div>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="3.6rem"
          style={{ paddingTop: "4rem" }}
        >
          <span>IFUMSA Alumni Relations Committee</span>, consectetur adipiscing
          elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet
          nunc. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
          egestas ultrices. Vestibulum et neque id ex semper varius a sit amet
          metus. Vivamus congue dolor e
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
      </EachSection>
    </Wrapper>
  );
}

export default index;
