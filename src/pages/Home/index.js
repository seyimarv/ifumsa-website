import React from "react";
import { Container as BootstrapContainer } from "react-bootstrap";
import picture1 from "../../Images/Home-Image.png";
import picture2 from "../../Images/Picture2.png";
import President from "../../Images/Lolu.jpg";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Typograpghy from "../../components/Typography/Typograpghy";
import QuoteImage from "../../Images/Quote";
import ImageScroll from "./ImageScroll";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { devices } from "../../styles/mediaQueries";
import EmailSubscribe from "../../components/Emailsubscribe";
import { motion } from "framer-motion";
import { Container } from "../../styles/container";
import Collapsible from "../../components/Collapsible";
import Image from "../../components/ImageComponent";

const {
  REACT_APP_MAILCHIMP_API,
  REACT_APP_MAILCHIMP_U,
  REACT_APP_MAILCHIMP_ID,
} = process.env;
const url = `${REACT_APP_MAILCHIMP_API}?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;

const Wrapper = styled(BootstrapContainer)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;
const Picture1 = styled(Image)`
  min-height: 60rem;
  width: 100%;
  border-radius: 5px;
  @media ${devices.tabport} {
    min-height: 40rem;
    padding: 1rem 0rem;
  }
  @media ${devices.phone} {
    min-height: 20rem;
    padding: 1rem 0rem;
  }

  @media screen and (max-width: 200px) {
    min-height: 10rem;
  }
`;
const Picture1Wrapper = styled.div`
  width: 96%;
  margin: auto;
  padding: 2rem 0rem;
  border-bottom: 1px solid ${colors.primary};
`;

const Picture2 = styled(Image)`
  height: auto;
  max-width: 38rem;

  @media ${devices.tabland} {
    max-width: 100%;
    width: 100%;
  }
  @media ${devices.phone} {
  }
`;

const Section1 = styled.div`
  width: 83%;
  margin: 4rem auto;
  display: flex;
  @media ${devices.tabland} {
    width: 90%;
  }
  @media ${devices.tabport} {
    flex-direction: column;
    align-items: flex-start;
    > * {
      width: 100%;
    }
  }

  > :first-child {
    padding-right: 8rem;
    max-width: 70%;
    @media ${devices.tabport} {
      padding-right: 2rem;
      max-width: 100%;
    }
  }

  > :nth-child(2) {
    @media ${devices.tabport} {
      padding-top: 4rem;
    }
  }
  @media ${devices.phone} {
    width: 95%;
  }
`;

const Section2 = styled.div`
  background: ${colors.primary};
  padding: 4rem 0px;

  .content-row {
    width: 83%;
    height: 100%;
    margin: 0rem auto;
    display: flex;
    ${"" /* align-items: center; */}
    @media ${devices.tabland} {
      width: 90%;
    }
    @media ${devices.tabport} {
      flex-direction: column;
      align-items: flex-start;
    }

    @media ${devices.phone} {
      width: 95%;
    }
    > div {
      @media ${devices.tabport} {
        width: 100%;
      }
    }
    > :nth-child(2) {
      padding-left: 4rem;
      margin-top: 4rem;
      max-width: 70%;
      justify-self: flex-end;
      @media ${devices.tabport} {
        padding-left: 0rem;
        max-width: 100%;
      }
    }
  }
`;

const Section3 = styled.div`
  position: relative;

  .content {
    padding: 14rem 0px;
    width: 70%;
    margin: 0px auto;

    @media ${devices.tabland} {
      width: 80%;
    }
    @media ${devices.phone} {
      width: 90%;
    }
  }
  .quote {
    position: absolute;
    svg {
      height: 15rem;
      width: 15rem;
      @media ${devices.phone} {
        max-width: 10rem;
        height: auto;
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

const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 67%;
  margin: 0px auto;
  margin-bottom: 13rem;

  button {
    margin-top: 4rem;
  }
  @media ${devices.tabland} {
    width: 80%;
  }
  @media ${devices.phone} {
    width: 90%;
  }
`;

const Home = () => {
  const fade = {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  };
  return (
    <Wrapper fluid>
      <Container>
        <Picture1Wrapper>
          <Picture1 alt="ifumsa" src={picture1} />
        </Picture1Wrapper>
      </Container>
      <Container>
        <Section1 noGutters>
          <div>
            <motion.div
              whileInView={fade}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
            >
              <Typograpghy
                color={colors.secondary}
                size="3.6rem"
                lineHeight="4rem"
                style={{
                  marginBottom: "1.5rem",
                  marginTop: "1.5rem",
                }}
              >
                About Us
              </Typograpghy>
            </motion.div>
            <motion.div
              whileInView={fade}
              viewport={{ once: true, amount: 0.8 }}
              initial={{ opacity: 0 }}
            >
              <Typograpghy>
                The MEDICAL STUDENTS’ ASSOCIATION (IFUMSA) of the prestigious
                Obafemi Awolowo University was established in 1972 as a group of
                individuals admitted to study Medicine and Surgery in the
                University of Ife(OAU) hence the name “Ife University Medical
                Students Association” and the acronym IFUMSA. This year 2022
                thus marks the 50th year of existence of the association.
                <Collapsible buttonText="Read">
                  <br />
                  As a conglomeration of tomorrow’s doctors to be trained in the
                  ancient, traditional and historic town of Ife, IFUMSA has
                  continually been an association to cater for the wellbeing of
                  her community and members from the little resources garnered
                  yearly from members.
                  <br />
                  <br />
                  The association has watched herself grow from less than 200
                  members in the ‘70s to over 700 members in recent times and
                  over 15,000 alumni successfully fielded all over the world.
                </Collapsible>
              </Typograpghy>
            </motion.div>
          </div>
          <div>
            <Picture2 alt="ifumsa" src={picture2} />
          </div>
        </Section1>
      </Container>

      <Section2>
        <Container>
          <div className="content-row">
            <div>
              <Picture2 alt="ifumsa" src={President} />
            </div>
            <div>
              <motion.div
                whileInView={fade}
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
              >
                <Typograpghy
                  color={colors.secondary}
                  size="3.6rem"
                  lineHeight="4rem"
                  style={{
                    marginBottom: "1.5rem",
                  }}
                >
                  Welcome Message from the President
                </Typograpghy>
              </motion.div>
              <motion.div
                whileInView={fade}
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
              >
                <Typograpghy color={colors.white}>
                  <strong>GOLDEN PRIDE OF IFUMSA </strong>
                  <br />
                  It does not take so long a time for the golden year to come.
                  It is for a fact, an element of progressiveness to understand
                  how long we have come, to appreciate the past and to welcome
                  the future.
                  <br />
                  <br />
                  Young students, who are now our fathers and mothers, pursuing
                  the MBChB degree at the University of Ife (now Obafemi Awolowo
                  University) established an association that projects their
                  interest, represents their ideals and serve their purposes.
                  That birthed the beginning of a very long but amazing journey.
                </Typograpghy>
                <Collapsible buttonText="Read">
                  {" "}
                  <Typograpghy color={colors.white}>
                    <>
                      <br />
                      <br />
                      Fifty years on and the ideals, purpose, hopes and
                      interests of our founding fathers remain our golden aims
                      and objectives. Our vision remains lucid and our mission
                      is rivetted.
                      <br />
                      <br />
                      As an association we have numerous activities, programs
                      and projects that continue to ensure our greatness is
                      preserved. We have for ourselves an enriched culture that
                      is bathed with the values of unity, love, teamspirit and
                      nobility. Our greatest treasures are the people both
                      members and alumni who continue to contribute to our
                      successes and progress all through the years. We pride
                      ourselves as an association that is one among many and
                      second to none, this mantra we have upheld for many years
                      unshaken and without blemish.
                      <br />
                      <br />
                      Our records speak for us. We thrive to ensure that our
                      members get the most out of their medical education, that
                      as a medical student you learn more than the medical
                      rudiments but you also pick up skills that are profitable
                      in the expanse of the world and that you have values that
                      will continue to open doors. We create opportunities and
                      enabling atmosphere for growth of passion,
                      extra-curricular activities and also build skills needed
                      both within and outside medicine. As a group of noble
                      professionals in training, our core objectives of academic
                      excellence continue to be our mandate while we also find
                      time for recreational activities that loosen burden.
                      <br />
                      <br />
                      Our alumni continue to be proud of what they left behind
                      and seeing us thrive is always their joy as is evident by
                      their continuous expression of satisfaction anytime we
                      have them.
                      <br />
                      <br />
                      As we have been existing for 50 Golden Years, the 50th
                      anniversary calls for celebration. To celebrate our
                      history, celebrate our achievements and also project for
                      the future. Activities in this regard are centered around
                      the power-packed 36th Health Week and the Mega Alumni
                      Reunion Honours Day program.
                      <br />
                      <br />
                      For the success of this 50th anniversary we are open to
                      partnerships, sponsorships, recommendations and ideas to
                      ensure that we create a lasting memory that is deserving
                      of a golden year.
                      <br />
                      <br />I want to implore you all to identify with our
                      anniversary programs as we look forward to achieving more
                      and celebrating this great feat. Congratulations to us
                      all!
                    </>
                  </Typograpghy>
                </Collapsible>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section2>
      <Container>
        <Section3>
          <div className="quote up">
            <QuoteImage />
          </div>
          <div className="content">
            <motion.div
              whileInView={fade}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
            >
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
                through the Nigerian Medical Students’ Association (NiMSA) as
                well as registered member of the International Federation of
                Medical Students’ Associations (IFMSA) and the Federation Of
                African Medical Students’ Association (FAMSA), we are committed
                to taking the good service of Medicine around the globe without
                any limit.
              </Typograpghy>
            </motion.div>
            <motion.div
              whileInView={fade}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
            >
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
                Our primary focus is to cater for the general welfare and
                interest of all Medical Students of the Obafemi Awolowo
                University, Ile-Ife as well as to contribute to the upliftment
                of the health conditions and general welfare of the people by
                rendering assistance in all community programs where Medical
                Students can be of help. We have been able to achieve numerous
                counts of this through our society alleviation programs,
                rallies, summits, outreaches, symposia, lectures and social
                events. Some of these are the Save Our Teachers Movement,
                Depression talks, Rally against Female Genital Mutilation and
                many more.
                <br />
                <br />
                We not only do this to help the society, we do this to help the
                doctor we are all going to become.
              </Typograpghy>
            </motion.div>
          </div>
          <div className="quote down">
            <QuoteImage />
          </div>
        </Section3>
      </Container>
      <ImageScroll />
      <Container>
        <Section4>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <EmailSubscribe
                status={status}
                message={message}
                onValidated={subscribe}
              />
            )}
          />
        </Section4>
      </Container>
    </Wrapper>
  );
};

export default Home;
