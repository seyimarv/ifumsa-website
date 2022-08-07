import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import ActivitiesImage from "../../Images/ActivitiesImage.png";
import IARC from "../../Images/IARC_IMAGES/iarc_1.jpeg";
import IHAC from "../../Images/IHAC_IMAGES/ihac_1.jpg";
import IFEMED from "../../Images/IFEMED_IMAGES/ifemed_1.jpg";
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
// <<<<<<< HEAD
  height: auto;
// =======
  min-height: 10rem;
// >>>>>>> 50673ca8d9a3de2949f5afc10b3e24e79e0d018b
  width: 100%;
`;

const EachSection = styled.div`
  margin: 0 2rem;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${colors.primary};

  :last-child {
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

  span {
    font-weight: 700;
  }

  .flex-left {
    flex: 6;
  }

  .flex-right {
    flex: 3;
    padding-left: 3rem;

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
            size="1.5rem"
            style={{ paddingTop: "2rem" }}
          >
{/* < HEAD */}
            <span>IFUMSA Alumni Relations Committee</span> of the Medical
            Students' Association, Obafemi Awolowo University, Ile-Ife (IFUMSA),
            formerly known as Ife University Medical Students' Association, is
            one of the standing and oldest committees of the Obafemi Awolowo
            University Medical Students' Association. The committee was founded
            based on the vision of our forebears to keep the alumni abreast and
            engaged in the progress of the association. Thus, the committee
            focuses on bridging the gap between alumni and current members.
=======
            <span>IFUMSA Alumni Relations Committee</span>, consectetur
            adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
            iaculis aliquet nunc. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam sit
            amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex
            semper varius a sit amet metus. Vivamus congue dolor eget aliquam
            hendrerit.
{/* >>>>>>> 50673ca8d9a3de2949f5afc10b3e24e79e0d018b */}
          </Typograpghy>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="2.3rem"
            size="1.5rem"
            style={{ paddingTop: "2rem" }}
          >
{/* <<<<<<< HEAD */}
            This committee is responsible for organizing the Mega Alumni
            Reunion, among other alumni-related events. Other activities of the
            committee include: database collection of alumni, building a broad
            alumni body, networking with alumni, celebration of eminent and
            respected alumni and so much more.
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
            O.A.U.; Prof Victor Adetiloye, the Chief Medical Director, Obafemi
            Awolowo University Teaching Hospitals Complex; Prof. Bernice
            Adegbehingbe, Immediate Past Dean of the Faculty of Clinical
            Sciences, O.A.U.; and Dr. Wale Okediran, a former member of the
            Federal House of Representatives.
=======
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit.
{/* >>>>>>> 50673ca8d9a3de2949f5afc10b3e24e79e0d018b */}
          </Typograpghy>
          <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div>
        </div>
        <div className="flex-right">
          <Picture src={IARC} />
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
            size="1.5rem"
            style={{ paddingTop: "2rem" }}
          >
{/* <<<<<<< HEAD */}
            <span>IFUMSA Health Awareness Club</span> was established in 2012 as
            an organ of IFUMSA. The club was founded based on the vision of
            creating health awareness among the populace and to be the most
            vocal and visible platform for health awareness in Osun State. Thus,
            the club uses dynamic, strategic and innovative approaches to keep
            people informed about their health and all that pertains to it.
=======
            <span>IFUMSA Health Awareness Club</span>, consectetur adipiscing
            elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet
            nunc. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
            egestas ultrices. Vestibulum et neque id ex semper varius a sit amet
            metus. Vivamus congue dolor eget aliquam hendrerit.
{/* >>>>>>> 50673ca8d9a3de2949f5afc10b3e24e79e0d018b */}
          </Typograpghy>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="2.3rem"
            size="1.5rem"
            style={{ paddingTop: "2rem" }}
          >
{/* <<<<<<< HEAD */}
            This club is responsible for acquiring valid information about
            health through research and educating our community on such
            health-related issues. Other activities of the club include:
            liaising with governmental and non- governmental organization in
            improving health on our community, organizing awareness programmes,
            school outreaches, market outreaches, village outreaches and so much
            more.
          </Typograpghy>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="2.3rem"
            size="1.5rem"
            style={{ paddingTop: "2rem" }}
          >
            Our staff advisers include Prof. Makinde, Consultant Obstetrician
            and Gynecologist, Obafemi Awolowo University Teaching Hospitals
            Complex and Dr. Ogundokun , Consultant Family Physician, Faculty of
            Clinical Sciences, O.A.U., Dr(Mrs) M.Y. Ijadunola, Consultant
            Community Health Physician, College of Health Sciences, Obafemi
            Awolowo University, Dr.(Mrs) Mapayi, Consultant psychiatrist,
            College of Health Sciences, O.A.U.
=======
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit.
{/* >>>>>>> 50673ca8d9a3de2949f5afc10b3e24e79e0d018b */}
          </Typograpghy>
          <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div>
        </div>
        <div className="flex-right">
          <Picture src={IHAC} />
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
            <span>IFEMED Journal Club</span> was established in 2012 as
            an organ of IFUMSA. The club was founded based on the vision of
            creating health awareness among the populace and to be the most
            vocal and visible platform for health awareness in Osun State. Thus,
            the club uses dynamic, strategic and innovative approaches to keep
            people informed about their health and all that pertains to it.
          </Typograpghy>
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
            liaising with governmental and non- governmental organization in
            improving health on our community, organizing awareness programmes,
            school outreaches, market outreaches, village outreaches and so much
            more.
          </Typograpghy>
          <Typograpghy
            align="left"
            color={colors.primary}
            lineHeight="2.3rem"
            size="1.5rem"
            style={{ paddingTop: "2rem" }}
          >
            Our staff advisers include Prof. Makinde, Consultant Obstetrician
            and Gynecologist, Obafemi Awolowo University Teaching Hospitals
            Complex and Dr. Ogundokun , Consultant Family Physician, Faculty of
            Clinical Sciences, O.A.U., Dr(Mrs) M.Y. Ijadunola, Consultant
            Community Health Physician, College of Health Sciences, Obafemi
            Awolowo University, Dr.(Mrs) Mapayi, Consultant psychiatrist,
            College of Health Sciences, O.A.U.
          </Typograpghy>
          <div className="button">
            <Button isPrimary>
              View More {">>"} <Shine />
            </Button>
          </div>
        </div>
        <div className="flex-right">
          <Picture src={IFEMED} />
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
          <Picture src={Medivoice} />
        </div>
      </EachSection>
    </Wrapper>
  );
}

export default OrgansAndClubs;
