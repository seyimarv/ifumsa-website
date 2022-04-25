import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import ActivitiesImage from "../../Images/ActivitiesImage.png";
import ActivitiesImg7 from "../../Images/ActivitiesImg7.png";
import IHACBloodDrive from "../../Images/IHACBloodDrive.png";
import Medivoice from "../../Images/Medivoice.png";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import { Button } from "../../components/Button";
import { Shine } from "../../components/Button/shine";

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
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

const Picture = styled.img`
  height: 100%;
  width: 100%;
`;

const EachSection = styled.div`
  margin: 0 2rem;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${colors.primary};

  :last-child{
    border-bottom: none;
  }

  @media ${devices.tabport} {
    padding: 4rem 2rem;
    margin: 0 1rem; 
  }

  @media ${devices.phone} {
    flex-direction: column;
    padding: 4rem 2rem;
    margin: 0 1rem;
  }

  .button {
    padding: 2rem 0;
    width: 40rem;
  }

  span{
    font-weight: 700;
  }

  .flex-left {
    flex: 6;
  }

  .flex-right {
    flex: 3;
    padding-left:3rem;

    @media ${devices.phone} {
      padding-left: 0;
    }
  }
`;

function OrgansAndClubs() {
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
          Organs {"&"} Clubs
        </Typograpghy>
      </Section1>
      <EachSection>
        <div className="flex-left">
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            align="left"
          >
            IFUMSA Alumni Relations Committee
          </Typograpghy>
          <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="2.3rem"
          size='1.5rem'
          style={{ paddingTop: "2rem" }}
        >
          <span>IFUMSA Alumni Relations Committee</span>, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit.
        </Typograpghy>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="2.3rem"
          size='1.5rem'
          style={{ paddingTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit.
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
        </div>
        <div className="flex-right">
          <Picture src={ActivitiesImg7} />
        </div>
      </EachSection>
      <EachSection>
        <div className="flex-left">
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            align="left"
          >
            IFUMSA Quiz {"&"} Debate Club
          </Typograpghy>
          <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="2.3rem"
          size='1.5rem'
          style={{ paddingTop: "2rem" }}
        >
          <span>IFUMSA Quiz {"&"} Debate Club</span>, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. 
        </Typograpghy>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="2.3rem"
          size='1.5rem'
          style={{ paddingTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit.
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
        </div>
        <div className="flex-right">
          <Picture src={ActivitiesImage} />
        </div>
      </EachSection>
      <EachSection>
        <div className="flex-left">
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            align="left"
          >
            IFUMSA Health Awareness Club
          </Typograpghy>
          <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="2.3rem"
          size='1.5rem'
          style={{ paddingTop: "2rem" }}
        >
          <span>IFUMSA Health Awareness Club</span>, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit.
        </Typograpghy>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="2.3rem"
          size='1.5rem'
          style={{ paddingTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. 
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
        </div>
        <div className="flex-right">
          <Picture src={IHACBloodDrive} />
        </div>
      </EachSection>
      <EachSection>
        <div className="flex-left">
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            align="left"
          >
            Medivoice
          </Typograpghy>
          <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="2.3rem"
          size='1.5rem'
          style={{ paddingTop: "2rem" }}
        >
          <span>Medivoice</span>, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. 
        </Typograpghy>
        <Typograpghy
          align="left"
          color={colors.primary}
          lineHeight="2.3rem"
          size='1.5rem'
          style={{ paddingTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. 
        </Typograpghy>
        <div className="button">
          <Button isPrimary>
            View More {">>"} <Shine />
          </Button>
        </div>
        </div>
        <div className="flex-right">
          <Picture src={Medivoice} />
        </div>
      </EachSection>
    </Wrapper>
  );
}

export default OrgansAndClubs;
