import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import AboutImage from "../../Images/about.png";
import ActivitiesImage from "../../Images/ActivitiesImage.png";
import Typograpghy from "../../components/Typography/Typograpghy";
import { devices } from "../../styles/mediaQueries";
import ExecutivesImage from "../../Images/Executives.jpg";
import Image from "../../components/ImageComponent";
import { Container as BodyContainer } from "../../styles/container";

const Wrapper = styled(Container)`
  padding: 1rem 0rem;
  margin: 0rem;
  overflow-x: hidden;
`;

const Picture = styled(Image)`
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
  padding: 4rem 6rem;

  img {
    border-radius: 10px;
  }
  :last-child {
    padding-bottom: 10rem;
  }

  .activities-image {
    min-height: 40rem;
  }

  @media ${devices.phone} {
    padding: 2rem 2rem;
    .activities-image {
      min-height: 20rem;
    }
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
      <BodyContainer>
        <EachSection>
          <Typograpghy
            color={colors.secondary}
            size="3.6rem"
            lineHeight="4rem"
            align="center"
          >
            Executive Arm
          </Typograpghy>
          <Typograpghy
            color={colors.primary}
            align="center"
            lineHeight="2.4rem"
            style={{ padding: "2rem 0" }}
          >
            The association activities are carried out by all members under the
            administrative functions of the Executive Council which has 10
            members elected into positions as stipulated by the decades-old
            constitution. The president assisted by his Vice oversees the entire
            functions while together with other Executives (General Secretary,
            Assistant General Secretary, Financial Secretary, Treasurer, Public
            Relations Officer, Welfare Secretary, Director of Sports and
            Director of Socials), they perform such duties as spelt out in the
            constitution.
            <br />
            <br />
            The organs of the association which includes Quiz Club, Journal
            Club, Medivoice News Agency and Health Awareness Club all work under
            the support of the Executive council to give back to members as well
            as serve the community’s best interest. The Quiz team represents the
            association in competitions ranging from medical quiz to debate
            competitions while the Journal Club is saddled with research and
            publications of educational journals. The Medivoice News Agency is
            the media arm of the association with undiluted news and information
            in open circulation. The Health Awareness club ensures outreach and
            proclamation of health matters to the community. All these organs
            over the years have never been derailed of their duties and can be
            said to have been a good training joints for the members of the
            association
          </Typograpghy>
          <Picture src={ExecutivesImage} className="activities-image" />
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
          <Typograpghy
            color={colors.primary}
            align="center"
            lineHeight="2.4rem"
            style={{ padding: "2rem 0" }}
          >
            The legislative arm, the Students’ Representative Body (SRB) is the
            law house of the association. Consisting of 44 members drawn from
            all levels of study, 5 members each from first year(premedical) to
            final year(clinical 3) and 4 persons from previous parliamentary
            year as ex-officio is saddled with the checks and balances as well
            as regulating the activities of the association.
          </Typograpghy>
          <Picture src={ActivitiesImage} className="activities-image" />
        </EachSection>
      </BodyContainer>
    </Wrapper>
  );
}

export default index;
