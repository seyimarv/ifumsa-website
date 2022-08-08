import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
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
import Sport1 from "../../Images/sport1.jpg";
import Sport2 from "../../Images/sport2.jpg";
import Sport3 from "../../Images/sport3.jpg";
import Sport4 from "../../Images/sport4.jpg";
import Sport5 from "../../Images/sport5.jpg";
import Academic1 from "../../Images/Academic1.jpg";
import Academic2 from "../../Images/Academic2.jpg";
import Academic3 from "../../Images/Academic3.jpg";
import Academic4 from "../../Images/Academic4.jpg";
import Academic5 from "../../Images/Academic5.jpg";
import Social2 from "../../Images/Social2.jpg";
import Social3 from "../../Images/Social3.jpg";
import Social4 from "../../Images/Social4.jpg";
import Social5 from "../../Images/social5.jpg";
import Image from "../../components/ImageComponent";
import BujuHealthWeek from "../../Images/BujuHealthweek1.jpg";
import Healthweek3 from "../../Images/Healthweekaward.jpg";
import HealthWeek7 from "../../Images/healthweek7.jpg";
import healthweek8 from "../../Images/healthweek8.jpg";
import Healthweek9 from "../../Images/Max.png";
import PregnantWoman from "../../Images/PregnantWoman.png";

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture = styled(Image)`
  min-height: 10rem;
  width: 100%;
`;

const ActivityPictures = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  layout: fill;
  max-height: 68rem;
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
    min-height: 63rem;
    @media ${devices.tabport} {
      min-height: 50rem;
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
            <ActivityPictures src={BujuHealthWeek} />
            <div className="grid-right">
              <ActivityPictures src={Social2} />
              <ActivityPictures src={Social3} />
              <ActivityPictures src={Social4} />
              <ActivityPictures src={Social5} />
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
          {/* <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div> */}
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
            <ActivityPictures src={Sport5} />
            <div className="grid-right">
              <ActivityPictures src={Sport1} />
              <ActivityPictures src={Sport2} />
              <ActivityPictures src={Sport3} />
              <ActivityPictures src={Sport4} />
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
            <ActivityPictures src={Outreach2} />
            <div className="grid-right">
              <ActivityPictures src={Outreach1} />
              <ActivityPictures src={Outreach3} />
              <ActivityPictures src={Outreach4} />
              <ActivityPictures src={Outreach5} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3.6rem"
            style={{ paddingTop: "4rem" }}
          >
            To inform people about their health and everything related to it, we
            employ innovative, strategic, and dynamic approaches. Through
            research, IFUMSA is tasked with gathering reliable information about
            health and educating our community on such matters. The club also
            coordinates with governmental and non-governmental organizations to
            improve community health, plans awareness campaigns, and conducts
            outreach initiatives in schools, markets, villages, and other
            settings.
          </Typograpghy>
          {/* <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div> */}
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
            <ActivityPictures src={Academic2} />
            <div className="grid-right">
              <ActivityPictures src={Academic5} />
              <ActivityPictures src={Academic3} />
              <ActivityPictures src={Academic4} />
              <ActivityPictures src={Academic1} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3.6rem"
            style={{ paddingTop: "4rem" }}
          >
            The IQDC has established itself as a prestigious organ of the
            association due to its history of consistent excellence in academic
            and debate competitions. This is not about to change any time soon,
            either.
            <br />
            The club boasts a membership of intellectuals who are eager to learn
            and are fully committed to the association's cause. The renowned
            "Medicus," a biennial intercollegiate quiz competition that it has
            won twice in the two editions since its inception, is also organized
            by the IFUMSA Quiz and Debate Club. The most recent competition,
            which was held in February 2022, featured schools from five
            geopolitical zones and was arguably one of the largest and most
            competitive intercollegiate medical competitions in recent memory.
          </Typograpghy>
          {/* <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div> */}
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
            <ActivityPictures src={Healthweek3} />
            <div className="grid-right">
              <ActivityPictures src={HealthWeek7} />
              <ActivityPictures src={healthweek8} />
              <ActivityPictures src={PregnantWoman} />
              <ActivityPictures src={Healthweek9} />
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
          {/* <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div> */}
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
            <ActivityPictures src={EECONE} />
            <div className="grid-right">
              <ActivityPictures src={EECFOUR} />
              <ActivityPictures src={EECSIX} />
              <ActivityPictures src={EECTWO} />
              <ActivityPictures src={EECFIVE} />
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
          {/* <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div> */}
        </EachSection>
      </BaseContainer>
    </Wrapper>
  );
}

export default index;
