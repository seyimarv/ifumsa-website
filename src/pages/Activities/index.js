import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import ActivitiesImg2 from "../../Images/ActivitiesImg2.png";
import ActivitiesImg3 from "../../Images/ActivitiesImg3.png";
import ActivitiesImg4 from "../../Images/ActivitiesImg4.png";
import ActivitiesImg5 from "../../Images/ActivitiesImg5.png";
import ActivitiesImg9 from "../../Images/ActivitiesImg9.png";
import { Container as BaseContainer } from "../../styles/container";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import { Button } from "../../components/Button";
import { Shine } from "../../components/Button/shine";
import EECONE from "../../Images/one.jpg";
import EECTWO from "../../Images/two.jpg";
import EECFOUR from "../../Images/Four.jpg";
import EECFIVE from "../../Images/Five.jpg";
import EECSIX from "../../Images/EECSIX.jpg";
import Outreach1 from "../../Images/outhreach1.jpg";
import Outreach2 from "../../Images/outreach2.jpg";
import Outreach3 from "../../Images/outreach3.jpg";
import Outreach4 from "../../Images/outreach4.jpg";
import Outreach5 from "../../Images/outreach5.jpg";
import Sport1 from "../../Images/sport1.jpg"
import Sport2 from "../../Images/sport2.jpg"
import Sport3 from "../../Images/sport3.jpg"
import Sport4 from "../../Images/sport4.jpg"
import Sport5 from "../../Images/sport5.jpg"
import Academic1 from "../../Images/Academic1.jpg"
import Academic2 from "../../Images/Academic2.jpg"
import Academic3 from "../../Images/Academic3.jpg"
import Academic4 from "../../Images/Academic4.jpg"
import Academic5 from "../../Images/Academic5.jpg"
import Social1 from "../../Images/Social1.jpg"
import Social2 from "../../Images/Social2.jpg"
import Social3 from "../../Images/Social3.jpg"
import Social4 from "../../Images/Social4.jpg"
import Social5 from "../../Images/social5.jpg"

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture = styled.img`
  min-height: 10rem;
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
    min-height:63rem;

    img {
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
      layout: fill;
    }

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

    ${'' /* img {
      height: 30rem;
      object-fit: cover;
      @media ${devices.smallPhone} {
        height: 15rem;
      }
    } */}
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
      <BaseContainer>
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
            <Picture src={Social1} />
            <div className="grid-right">
              <Picture src={Social2} />
              <Picture src={Social3} />
              <Picture src={Social4} />
              <Picture src={Social5} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3.6rem"
            style={{ paddingTop: "4rem" }}
          >
            <span>IFUMSA Alumni Relations Committee</span>, consectetur
            adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
            iaculis aliquet nunc. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam sit
            amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex
            semper varius a sit amet metus. Vivamus congue dolor e
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
            <Picture src={Sport5} />
            <div className="grid-right">
              <Picture src={Sport1} />
              <Picture src={Sport2} />
              <Picture src={Sport3} />
              <Picture src={Sport4} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3.6rem"
            style={{ paddingTop: "4rem" }}
          >
            <span>IFUMSA Alumni Relations Committee</span>, consectetur
            adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
            iaculis aliquet nunc. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam sit
            amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex
            semper varius a sit amet metus. Vivamus congue dolor e
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
            <Picture src={Outreach2} />
            <div className="grid-right">
              <Picture src={Outreach1} />
              <Picture src={Outreach3} />
              <Picture src={Outreach4} />
              <Picture src={Outreach5} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3.6rem"
            style={{ paddingTop: "4rem" }}
          >
            <span>IFUMSA Alumni Relations Committee</span>, consectetur
            adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
            iaculis aliquet nunc. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam sit
            amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex
            semper varius a sit amet metus. Vivamus congue dolor e
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
            <Picture src={Academic2} />
            <div className="grid-right">
              <Picture src={Academic5} />
              <Picture src={Academic3} />
              <Picture src={Academic4} />
              <Picture src={Academic1} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3.6rem"
            style={{ paddingTop: "4rem" }}
          >
            <span>IFUMSA Alumni Relations Committee</span>, consectetur
            adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
            iaculis aliquet nunc. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam sit
            amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex
            semper varius a sit amet metus. Vivamus congue dolor e
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
            <span>IFUMSA Alumni Relations Committee</span>, consectetur
            adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
            iaculis aliquet nunc. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam sit
            amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex
            semper varius a sit amet metus. Vivamus congue dolor e
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
            <Picture src={EECONE} />
            <div className="grid-right">
              <Picture src={EECFOUR} />
              <Picture src={EECSIX} />
              <Picture src={EECTWO} />
              <Picture src={EECFIVE} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3.6rem"
            style={{ paddingTop: "4rem" }}
          >
            <span>IFUMSA Alumni Relations Committee</span>, consectetur
            adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
            iaculis aliquet nunc. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam sit
            amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex
            semper varius a sit amet metus. Vivamus congue dolor e
          </Typograpghy>
          <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div>
        </EachSection>
      </BaseContainer>
    </Wrapper>
  );
}

export default index;
