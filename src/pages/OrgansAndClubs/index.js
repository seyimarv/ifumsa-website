import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
// import ActivitiesImage from "../../Images/ActivitiesImage.png";
import IHAC from "../../Images/IHAC_IMAGES/ihac_1.jpg";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import Image from "../../components/ImageComponent";
import Collapsible from "../../components/Collapsible";
import { Container as BaseContainer } from "../../styles/container";
import ImageScroll from "./PhotoGallery";
import Medivoice1 from "../../Images/Medivoice1.jpeg";
import Medivoice2 from "../../Images/Medivoice2.jpeg";
import Medivoice3 from "../../Images/Medivoice3.jpeg";
import IQDC1 from "../../Images/IQDC1.jpeg";
import IQDC2 from "../../Images/IQDC2.jpeg";
import IQDC3 from "../../Images/IQDC3.jpeg";
import IHAC1 from "../../Images/IHAC1.jpeg";
import IHAC3 from "../../Images/IHAC.jpeg";
import JOURNAL1 from "../../Images/JOURNAL1.jpeg";
import JOURNAL2 from "../../Images/JOURNAL2.jpeg";
import JOURNAL3 from "../../Images/JOURNAL3.jpeg";
import ALUMNI1 from "../../Images/ALUMNI1.jpeg";
import ALUMNI2 from "../../Images/ALUMNI2.jpeg";
import ALUMNI3 from "../../Images/ALUMNI3.jpeg";
import ALUMNI4 from "../../Images/ALUMNI4.jpeg";
import Transitions from "../../components/pageTransitions";

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

const PictureBg = styled(Image)`
  min-height: 10rem;
  width: 100%;
`;

const EachSection = styled.div`
  margin: 0 2rem;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${colors.primary};
  :first-child {
    width: 100%;
  }
  :last-child {
    border-bottom: none;
  }

  @media ${devices.tabport} {
    flex-direction: column;
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

  span {
    font-weight: 700;
  }

  .flex-left {
    flex: 2;

    @media ${devices.tabport} {
      flex: 1;
    }
  }

  .flex-right {
    width: 40%;
    padding-left: 3rem;
    @media ${devices.tabport} {
      width: 100%;
    }

    @media ${devices.phone} {
      padding-left: 0;
    }
  }
`;

const MEDIVOICEPHOTOS = [Medivoice1, Medivoice2, Medivoice3];
const IQDCPHOTOS = [IQDC1, IQDC2, IQDC3];
const IHACPHOTOS = [IHAC1, IHAC, IHAC3];
const JOURNALPHOTOS = [JOURNAL1, JOURNAL2, JOURNAL3];
const ALUMNIPHOTOS = [ALUMNI1, ALUMNI2, ALUMNI3, ALUMNI4];

function OrgansAndClubs() {
  return (
    <Transitions>
      <Wrapper fluid>
        <Section1>
          <PictureBg src={AboutImage} />
          <Typograpghy
            color={colors.secondary}
            size="6.4rem"
            lineHeight="7.8rem"
            className="text"
          >
            Organs {"&"} Clubs
          </Typograpghy>
        </Section1>
        <BaseContainer>
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
                size="1.5rem"
                style={{ paddingTop: "2rem" }}
              >
                <span>IFUMSA Alumni Relations Committee</span> of the Medical
                Students' Association, Obafemi Awolowo University, Ile-Ife
                (IFUMSA), formerly known as Ife University Medical Students'
                Association, is one of the standing and oldest committees of the
                Obafemi Awolowo University Medical Students' Association. The
                committee was founded based on the vision of our forebears to
                keep the alumni abreast and engaged in the progress of the
                association. Thus, the committee focuses on bridging the gap
                between alumni and current members.
              </Typograpghy>

              <Collapsible buttonText={"View"} buttonType="primary">
                <Typograpghy
                  align="left"
                  color={colors.primary}
                  lineHeight="2.3rem"
                  size="1.5rem"
                  style={{ paddingTop: "2rem" }}
                >
                  This committee is responsible for organizing the Mega Alumni
                  Reunion, among other alumni-related events. Other activities
                  of the committee include: database collection of alumni,
                  building a broad alumni body, networking with alumni,
                  celebration of eminent and respected alumni and so much more.
                </Typograpghy>
                <Typograpghy
                  align="left"
                  color={colors.primary}
                  lineHeight="2.3rem"
                  size="1.5rem"
                  style={{ paddingTop: "2rem" }}
                >
                  Our patrons include Prof Babatope Kolawole, the provost of the
                  College of Health Sciences, Obafemi Awolowo University; Prof.
                  Oludayo Sowande, the Dean of the Faculty of Clinical Sciences,
                  O.A.U.; Prof Victor Adetiloye, the Chief Medical Director,
                  Obafemi Awolowo University Teaching Hospitals Complex; Prof.
                  Bernice Adegbehingbe, Immediate Past Dean of the Faculty of
                  Clinical Sciences, O.A.U.; and Dr. Wale Okediran, a former
                  member of the Federal House of Representatives.
                </Typograpghy>
              </Collapsible>
            </div>
            <div className="flex-right">
              <ImageScroll photos={ALUMNIPHOTOS} />
            </div>
          </EachSection>
          {/* <EachSection>
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
            size="1.5rem"
            style={{ paddingTop: "2rem" }}
          >
            <span>IFUMSA Quiz {"&"} Debate Club</span>, consectetur adipiscing
            elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet
            nunc. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
            egestas ultrices. Vestibulum et neque id ex semper varius a sit amet
            metus. Vivamus congue dolor eget aliquam hendrerit.
          </Typograpghy>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="2.3rem"
            size="1.5rem"
            style={{ paddingTop: "2rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit.
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
      </EachSection> */}
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
                size="1.5rem"
                style={{ paddingTop: "2rem" }}
              >
                <span>IFUMSA Health Awareness Club</span> was established in
                2012 as an organ of IFUMSA. The club was founded based on the
                vision of creating health awareness among the populace and to be
                the most vocal and visible platform for health awareness in Osun
                State. Thus, the club uses dynamic, strategic and innovative
                approaches to keep people informed about their health and all
                that pertains to it.
              </Typograpghy>
              <Collapsible buttonText={"View"} buttonType="primary">
                <Typograpghy
                  align="left"
                  color={colors.primary}
                  lineHeight="2.3rem"
                  size="1.5rem"
                  style={{ paddingTop: "2rem" }}
                >
                  This club is responsible for acquiring valid information about
                  health through research and educating our community on such
                  health-related issues. Other activities of the club include:
                  liaising with governmental and non- governmental organization
                  in improving health on our community, organizing awareness
                  programmes, school outreaches, market outreaches, village
                  outreaches and so much more.
                </Typograpghy>
                <Typograpghy
                  align="left"
                  color={colors.primary}
                  lineHeight="2.3rem"
                  size="1.5rem"
                  style={{ paddingTop: "2rem" }}
                >
                  Our staff advisers include Prof. Makinde, Consultant
                  Obstetrician and Gynecologist, Obafemi Awolowo University
                  Teaching Hospitals Complex and Dr. Ogundokun , Consultant
                  Family Physician, Faculty of Clinical Sciences, O.A.U.,
                  Dr(Mrs) M.Y. Ijadunola, Consultant Community Health Physician,
                  College of Health Sciences, Obafemi Awolowo University,
                  Dr.(Mrs) Mapayi, Consultant psychiatrist, College of Health
                  Sciences, O.A.U.
                </Typograpghy>
              </Collapsible>
            </div>
            <div className="flex-right">
              <ImageScroll photos={IHACPHOTOS} />
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
                IFEMED Journal Club
              </Typograpghy>
              <Typograpghy
                align="left"
                color={colors.primary}
                lineHeight="2.3rem"
                size="1.5rem"
                style={{ paddingTop: "2rem" }}
              >
                <span>IFEMED Journal Club</span> was established in 2012 as an
                organ of IFUMSA. The club was founded based on the vision of
                creating health awareness among the populace and to be the most
                vocal and visible platform for health awareness in Osun State.
                Thus, the club uses dynamic, strategic and innovative approaches
                to keep people informed about their health and all that pertains
                to it.
              </Typograpghy>
              <Collapsible buttonText={"View"} buttonType="primary">
                <Typograpghy
                  align="left"
                  color={colors.primary}
                  lineHeight="2.3rem"
                  size="1.5rem"
                  style={{ paddingTop: "2rem" }}
                >
                  This club is responsible for acquiring valid information about
                  health through research and educating our community on such
                  health-related issues. Other activities of the club include:
                  liaising with governmental and non- governmental organization
                  in improving health on our community, organizing awareness
                  programmes, school outreaches, market outreaches, village
                  outreaches and so much more.
                </Typograpghy>
                <Typograpghy
                  align="left"
                  color={colors.primary}
                  lineHeight="2.3rem"
                  size="1.5rem"
                  style={{ paddingTop: "2rem" }}
                >
                  Our staff advisers include Prof. Makinde, Consultant
                  Obstetrician and Gynecologist, Obafemi Awolowo University
                  Teaching Hospitals Complex and Dr. Ogundokun , Consultant
                  Family Physician, Faculty of Clinical Sciences, O.A.U.,
                  Dr(Mrs) M.Y. Ijadunola, Consultant Community Health Physician,
                  College of Health Sciences, Obafemi Awolowo University,
                  Dr.(Mrs) Mapayi, Consultant psychiatrist, College of Health
                  Sciences, O.A.U.
                </Typograpghy>
              </Collapsible>
            </div>
            <div className="flex-right">
              <ImageScroll photos={JOURNALPHOTOS} />
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
                size="1.5rem"
                style={{ paddingTop: "2rem" }}
              >
                MediVoice is the literary and journalism club of the Obafemi
                Awolowo University Medical Students’ Association. With a diverse
                group of writers, it focuses on delivering a wide range of
                literary content and reports of activities & events.
                <Collapsible buttonText={"View"} buttonType="primary">
                  <Typograpghy
                    align="left"
                    color={colors.primary}
                    lineHeight="2.3rem"
                    size="1.5rem"
                    style={{ paddingTop: "2rem" }}
                  >
                    MediVoice stands in the gap between the Ife Med life and
                    Other Associations on our great campus. We show the world
                    what it is like being a medical student and how our lives go
                    far beyond the books. We also provide an unwinding space for
                    IFUMSAites through our diverse array of topics spanning
                    lifestyle, sports news, flash fiction, and many more.
                  </Typograpghy>
                  <Typograpghy
                    align="left"
                    color={colors.primary}
                    lineHeight="2.3rem"
                    size="1.5rem"
                    style={{ paddingTop: "2rem" }}
                  >
                    We are saddled with the duty of publishing the association’s
                    magazine (CADUCEUS) and bridging the communication gap
                    between classes of IFUMSA to ensure a clear, unified voice
                    that speaks and is heard, reaching every member of our Great
                    Association.
                  </Typograpghy>
                </Collapsible>
              </Typograpghy>
            </div>
            <div className="flex-right">
              <ImageScroll photos={MEDIVOICEPHOTOS} />
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
                IFUMSA Quiz and Debate Club (IQDC)
              </Typograpghy>
              <Typograpghy
                align="left"
                color={colors.primary}
                lineHeight="2.3rem"
                size="1.5rem"
                style={{ paddingTop: "2rem" }}
              >
                The IFUMSA Quiz and Debate Club (IQDC) is the organ of the
                Obafemi Awolowo University Medical Students' Association
                (IFUMSA) that represents the college at academic competitions -
                quizzes and debates.
                <Collapsible buttonText={"View"} buttonType="primary">
                  <Typograpghy
                    align="left"
                    color={colors.primary}
                    lineHeight="2.3rem"
                    size="1.5rem"
                    style={{ paddingTop: "2rem" }}
                  >
                    The club's culture is to serve as the academic front of the
                    Obafemi Awolowo University Medical Students' Association
                    (IFUMSA) at intercollegiate quizzes and debates; to showcase
                    - and bolster - its members' intellectual prowess at these
                    competitive gatherings; and to maintain a reputable academic
                    image of the Obafemi Awolowo University Medical Students'
                    Association (IFUMSA) amidst other MSAs in the region and
                    beyond.
                  </Typograpghy>
                  <Typograpghy
                    align="left"
                    color={colors.primary}
                    lineHeight="2.3rem"
                    size="1.5rem"
                    style={{ paddingTop: "2rem" }}
                  >
                    IQDC's track record of consistent excellence at academic and
                    Debate competitions over the years has cemented its place as
                    a prestigious organ of the association - and indeed, this is
                    not changing anytime soon. The club boasts the membership of
                    teachable and knowledge-driven intellectuals fully committed
                    to the cause of the association.
                  </Typograpghy>
                  <Typograpghy
                    align="left"
                    color={colors.primary}
                    lineHeight="2.3rem"
                    size="1.5rem"
                    style={{ paddingTop: "2rem" }}
                  >
                    Membership is opened to IFUMSAites in their second year and
                    above.
                  </Typograpghy>
                  <Typograpghy
                    align="left"
                    color={colors.primary}
                    lineHeight="2.3rem"
                    size="1.5rem"
                    style={{ paddingTop: "2rem" }}
                  >
                    The IFUMSA Quiz and Debate Club is also the organizer of the
                    renowned "Medicus", a biennial intercollegiate quiz
                    competition which it has won twice in the two editions since
                    its conception. The last edition, which took place in
                    February 2022, was arguably one of the biggest and most
                    intense intercollegiate medical competitions in recent
                    years, with schools from five geo-political zones in
                    attendance.
                  </Typograpghy>
                </Collapsible>
              </Typograpghy>
            </div>
            <div className="flex-right">
              <ImageScroll photos={IQDCPHOTOS} />
            </div>
          </EachSection>
        </BaseContainer>
      </Wrapper>
    </Transitions>
  );
}

export default OrgansAndClubs;
