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
import Collapsible from "../../components/Collapsible";
import { saveAs } from "file-saver";
import ifumsaconstitution from "../../Images/IFUMSA-Constitution.pdf";
import Image from "../../components/ImageComponent";
import EmailSubscribe from "../../components/Emailsubscribe";

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture1 = styled(Image)`
  height: 100%;
  width: 100%;
  min-height: 10rem;
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

const Section2 = styled.div`
  position: relative;

  .content {
    padding: 14rem 21.8rem;
    @media ${devices.tabland} {
      padding: 14rem 10rem;
    }
    @media ${devices.phone} {
      padding: 14rem 4rem;
    }
  }
  .quote {
    position: absolute;
    svg {
      height: 15rem;
      width: 15rem;

      @media ${devices.phone} {
        width: 12rem;
        height: 12rem;
      }
    }
  }
  .up {
    top: 1.5rem;
    left: 1.5rem;
  }
  .down {
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

const Section3 = styled.div`
  background: ${colors.primary};
  padding: 10rem 20.2rem;
  @media ${devices.tabland} {
    padding: 10rem 10rem;
  }
  @media ${devices.phone} {
    padding: 10rem 4rem;
  }
  .buttons {
    justify-content: center;
    display: flex;
    width: 100%;
    margin: 0px auto;
    margin-top: 4rem;

    @media ${devices.tabland} {
      width: 80%;
    }
    @media ${devices.tabport} {
      width: 100%;
    }

    @media ${devices.phone} {
      flex-direction: column;

      > button {
        font-size: 1.8rem;
        padding: 1.4rem 1rem;

        :nth-child(2) {
          margin-top: 2rem;
        }
      }
    }
  }
`;
const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 25rem;
  margin-bottom: 13rem;

  button {
    margin-top: 4rem;
  }
  @media ${devices.tabland} {
    padding: 0rem 10rem;
  }
  @media ${devices.phone} {
    padding: 0rem 4rem;
  }
`;
const About = () => {
  function saveConstitution() {
    saveAs(ifumsaconstitution, "ifumsaconstitution.pdf");
  }

  return (
    <Wrapper fluid>
      <Section1>
        <Picture1 src={AboutImage} />
        <Typograpghy
          color={colors.secondary}
          size="6.4rem"
          lineHeight="7.8rem"
          className="text"
        >
          About IFUMSA
        </Typograpghy>
      </Section1>
      <Section2>
        <div className="quote up">
          <QuoteImage />
        </div>
        <div className="content">
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            style={{
              marginBottom: "3.6rem",
            }}
            align="center"
          >
            Our Vision
          </Typograpghy>
          <Typograpghy color={colors.primary} align="center">
            As an affiliate member of the Nigerian Medical Association (NMA)
            through the Nigerian Medical Students’ Association (NiMSA) as well
            as registered member of the International Federation of Medical
            Students’ Associations (IFMSA) and the Federation Of African Medical
            Students’ Association (FAMSA), we are committed to taking the good
            service of Medicine around the globe without any limit.
          </Typograpghy>

          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            style={{
              margin: "3.6rem",
            }}
            align="center"
          >
            Our Mission
          </Typograpghy>
          <Typograpghy color={colors.primary} align="center">
            Our primary focus is to cater for the general welfare and interest
            of all Medical Students of the Obafemi Awolowo University, Ile-Ife
            as well as to contribute to the upliftment of the health conditions
            and general welfare of the people by rendering assistance in all
            community programs where Medical Students can be of help. We have
            been able to achieve numerous counts of this through our society
            alleviation programs, rallies, summits, outreaches, symposia,
            lectures and social events. Some of these are the Save Our Teachers
            Movement, Depression talks, Rally against Female Genital Mutilation
            and many more.
            <br />
            <br />
            We not only do this to help the society, we do this to help the
            doctor we are all going to become.
          </Typograpghy>
        </div>
        <div className="quote down">
          <QuoteImage />
        </div>
      </Section2>
      <Section3>
        <Typograpghy
          color={colors.secondary}
          size="3.6rem"
          lineHeight="4rem"
          style={{
            margin: "3.6rem",
          }}
          align="center"
        >
          Brief History of IFUMSA
        </Typograpghy>
        <Typograpghy color={colors.white} align="center">
          IFUMSA is the medical students association for the Obafemi Awolowo
          University chapter. Created in September 1972 by the foundation
          students of the Faculty of health sciences [now college of health
          sciences] which was established May 8,1972. IFUMSA was created in a
          bid to harness the full potential of medical students and run a body
          that aims at developing students’ potential for creativity,
          leadership, entrepreneurship, diplomacy and more.
          <br />
          <br />
          In the 50 years of the existence of IFUMSA the association has seen a
          lot of remarkable events and people. The second inaugurated President
          of IFUMSA Professor Adetokunbo Fabamwo set a standard for the
          association as they created the system and organ on which IFUMSA
          functions till today. Currently IFUMSA has 5 organs, over 700 members
          and a 44-seat IFUMSA parliament headed by the speaker of the house,
          whose function is to make decisions concerning the smooth running of
          the association in accordance with the constitution.
          <Collapsible buttonText="Read">
            <br />
            <br />
            This association has witnessed 43 presidents who have left
            outstanding marks in the history of the association. Dr. Akinola
            Beloved, the 42nd President, started the IFUMSA entrepreneurship and
            economic summit in 2020. The second and first physical
            Entrepreneurship summit was held in February 2022 during the 43rd
            President of IFUMSA’s tenure, Dr. ‘Lolu Akinteye. This event was
            graced with phenomenal trailblazers in the medicine, technology and
            finance sectors. The event was graced by Barr. Jimoh Ibrahim, Dr.
            Itunu Akinware, Mr. Babatunde Akin- Moses, Mr. Joshua Koya amongst
            many others.
            <br />
            <br />
            Over the years, IFUMSA has been known to host multiple events and
            seminars. Outstanding among them are the IFUMSA Health week,
            Biennial Honors day and the Doctor plus series. The health week is
            the annual grand finale of a parliamentary year. It is a week to
            establish our contribution to the health sector and to further
            reinvigorate our identity as medical students.
            <br />
            <br />
            The last health week that was held in 2021 was one for the books. It
            was graced by noteworthy people in the likes of the Vice chancellor,
            Osun state commissioner for Health, Osun state commissioner for
            women affairs, Aproko Doctor, BNXN, NiMSA president amongst many
            others. The Health week was filled with so many activities from the
            rally, to the Articine capped with the health week dinner.
            <br />
            <br />
            We have grown our presence across various platforms like Instagram,
            Twitter, youtube and LinkedIn. We have also been featured in various
            articles and have received numerous recognition.
            <br />
            <br />
            IFUMSA has received multiple awards for our contribution to the
            health sector and excellence in various feats. Some of the
            remarkable ones are the Dokita Quiz, Ibadan, the Ojoawo Quiz,
            Ilorin. In 2021, IFUMSA won the award for best event held in Ife for
            our Health week.
            <br />
            <br />
            IFUMSA can not run without some particular set of people making sure
            that all the activities and duties are carried out properly. These
            posts are filled in every parliamentary year with each post having
            its own guidelines on what is expected of them as stated in the
            constitution. Posts like that of the General Secretary, PRO,
            Treasurer, Financial Secretary and the likes are filled by electing
            the candidates through a free and fair democratic election.
            <br />
            <br />
            These awesome candidates that have occupied these positions in
            IFUMSA have over the years made lasting impacts in their tenures.
            <br />
            <br />
            IFUMSA is a platform where young talented and brilliant doctors are
            raised and groomed in entrepreneurship, discipline, creativity and
            core skills are impacted into them. An association where young
            individuals are groomed to handle real life tasks. IFUMSA is indeed
            the place to be!
          </Collapsible>
        </Typograpghy>
        <div className="buttons">
          <Button isGhost onClick={saveConstitution}>
            Download Constitution <Shine />
          </Button>
        </div>
      </Section3>
      <Section4>
        <EmailSubscribe />
      </Section4>
    </Wrapper>
  );
};

export default About;
