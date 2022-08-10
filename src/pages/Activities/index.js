import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import { Container as BaseContainer } from "../../styles/container";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import Podcast1 from "../../Images/Podcast1.jpg";
import PodcastLogo from "../../Images/Podcast6.jpg";
import Podcast2 from "../../Images/Podcast2.jpg";
import Podcast3 from "../../Images/Podcast3.jpg";
import Podcast4 from "../../Images/Podcast4.jpg";
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
import Social2 from "../../Images/social10-compress1.jpg";
import Social3 from "../../Images/social11-compress1.jpg";
import Social4 from "../../Images/Social2.jpg";
import Social5 from "../../Images/social12-compress1.jpg";
import Image from "../../components/ImageComponent";
import BujuHealthWeek from "../../Images/BujuHealthweek1.jpg";
import Healthweek3 from "../../Images/Healthweekaward.jpg";
import HealthWeek7 from "../../Images/healthweek7.jpg";
import healthweek8 from "../../Images/healthweek8.jpg";
import Healthweek9 from "../../Images/Max.png";
import PregnantWoman from "../../Images/PregnantWoman.png";
import Collapsible from "../../components/Collapsible";
import Plus1 from "../../Images/plus1.jpeg"
import Plus2 from "../../Images/plus2.jpeg"
import Plus3 from "../../Images/plus3.jpeg"
import Plus4 from "../../Images/Plus4.jpeg"
import Plus5 from "../../Images/Plus5.jpeg"

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
  overflow: hidden;
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
    max-height: 68rem;
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
            IFUMSA PODCAST (VOICES N' VIBES)
          </Typograpghy>

          <div className="image-container">
            <ActivityPictures src={Podcast3} />
            <div className="grid-right">
              <ActivityPictures src={Podcast1} />
              <ActivityPictures src={Podcast2} />
              <ActivityPictures src={Podcast4} />
              <ActivityPictures src={PodcastLogo} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3rem"
            style={{ paddingTop: "4rem" }}
          >
            The Voices N' Vibes Podcast was officially launched on October 23,
            2021, in the quintessential administration to constantly keep
            IFUMSAITES informed of events in college and their society.
            <Collapsible buttonText="View" buttonType="primary">
              <br />
              Since its inception, this podcast's audience has grown to well
              over 1500 plays. The podcast's episodes cover a wide range of
              topics, including medical school stories, health, lifestyle,
              fashion, mental health, and personal development advice.
              <br />
              <a
                href="https://anchor.fm/ifumsa-roadshow"
                target="_blank"
                rel="noreferrer"
              >
                Listen here
              </a>
            </Collapsible>
          </Typograpghy>
        </EachSection>
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
            lineHeight="3rem"
            style={{ paddingTop: "4rem" }}
          >
            IFUMSA makes an effort to ensure that her members are not only
            bookworms, but also have a good time. So, in IFUMSA, we organize a
            variety of social events such as hangouts, movie nights, parties,
            and other programs aimed at fostering social relationships.
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
            lineHeight="3rem"
            style={{ paddingTop: "4rem" }}
          >
            We value our members' participation in sports and encourage a spirit
            of sportsmanship within the association. As a result, we organize
            and have clubs for various types of sports. The Wale Okediran
            Competition, IFUMSA Athletics, IFUMSA Chess Competition, and Tennis
            Competition are examples of such activities.
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
            lineHeight="3rem"
            style={{ paddingTop: "4rem" }}
          >
            To inform people about their health and everything related to it, we
            employ innovative, strategic, and dynamic approaches.
            <Collapsible buttonText="View" buttonType="primary">
              <br />
              Through research, IFUMSA is tasked with gathering reliable
              information about health and educating our community on such
              matters. We also collaborate with governmental and
              non-governmental organizations to improve community health, plans
              awareness campaigns, and conducts outreach initiatives in schools,
              markets, villages, and other settings.
            </Collapsible>
          </Typograpghy>
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
            lineHeight="3rem"
            style={{ paddingTop: "4rem" }}
          >
            We have established ourselves as a prestigious medical student
            association due to our history of consistent excellence in academic
            and debate competitions. This is not about to change any time soon,
            either. We boast a membership of intellectuals who are eager to
            learn and are fully committed to the association's cause.
            <Collapsible buttonText="View" buttonType="primary">
              <br />
              The renowned "Medicus," a biennial intercollegiate quiz
              competition that it has won twice in the two editions since its
              inception, is organized by the IFUMSA Quiz and Debate Club. The
              most recent competition, which was held in February 2022, featured
              schools from five geopolitical zones and was arguably one of the
              largest and most competitive intercollegiate medical competitions
              in recent memory.
            </Collapsible>
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
            lineHeight="3rem"
            style={{ paddingTop: "4rem" }}
          >
            IFUMSAITES' Healthweek is an annual event during which the
            association plans a variety of programs to ensure that IFUMSAITES
            become a well-rounded group of medical practitioners.
            <Collapsible buttonText="View" buttonType="primary">
              <br />
              This Healthweek has featured the following programs in recent
              years: an opening rally, an articine, a scientific conference, a
              public lecture, a debate competition, the Wale Okediran Football
              Cup, and, of course, a grand dinner party.
              <br />
              <br />
              We are looking forward to the 36th edition of Healthweek.
            </Collapsible>
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
            lineHeight="3rem"
            style={{ paddingTop: "4rem" }}
          >
            The association has recently just had its 2nd Entrepreneurship and
            Economic Summit. The first which held in the year 2020 as a virtual
            event during the COVID pandemic under the administration of Dr.
            Akinola Beloved.
            <Collapsible buttonText="View" buttonType="primary">
              <br />
              This program was borne out of the motivation of producing a crop
              of medical doctors who are entrepreneurially minded and can stand
              head to head with their colleagues in other climes of the world.
              <br />
              <br />
              The last edition was a three-day event that included a Symposium,
              pitching competition, award presentation, and a roundtable
              discussion session.
            </Collapsible>
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
            DOCTOR PLUS SERIES
          </Typograpghy>

          <div className="image-container">
            <ActivityPictures src={Plus2} />
            <div className="grid-right">
              <ActivityPictures src={Plus1} />
              <ActivityPictures src={Plus3} />
              <ActivityPictures src={Plus4} />
              <ActivityPictures src={Plus5} />
            </div>
          </div>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="3rem"
            style={{ paddingTop: "4rem" }}
          >
            The Doctor Plus Series was birthed in 2017 as a series of event to
            enlighten medical students on the career pathways beyond Medical and
            Clinical practice and sometimes even delving more into opportunities
            within the medical space.
            <Collapsible buttonText="View" buttonType="primary">
              <br />
              The first edition was on Medical Entrepreneurship. The second
              edition delved into Military Opportunities for Doctors and the
              third enlightened medical students on the health technology.
              <br />
              <br />
              The theme for Doctor Plus 4.0 was{" "}
              <strong>
                Accessing Global Opportunities for Medical Students
              </strong>{" "}
              and it was all value-packed, impactful and relevant
            </Collapsible>
          </Typograpghy>
        </EachSection>
      </BaseContainer>
    </Wrapper>
  );
}

export default index;
