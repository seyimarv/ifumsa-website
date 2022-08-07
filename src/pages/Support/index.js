import React from "react";
import { devices } from "../../styles/mediaQueries";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Typograpghy from "../../components/Typography/Typograpghy";
import { colors } from "../../styles/colors";

const Wrapper = styled(Container)`
  padding: 1rem 10rem;
  margin: 0rem;
  overflow-x: hidden;
  padding-bottom: 30rem;

  @media ${devices.phone} {
    padding: 1rem 2rem;
    padding-bottom: 30rem;
  }
`;

const Support = () => {
  return (
    <Wrapper fluid>
      <Typograpghy
        color={colors.secondary}
        size="3.6rem"
        lineHeight="4.3rem"
        align="center"
        mt="4rem"
      >
        Why You Should Support Us?
      </Typograpghy>
      <Typograpghy size="1.8rem" lineHeight="2.1rem" align="center" mt="1.5rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus
        elementum amet integer. Donec mattis sed adipiscing neque, non. Ut
        venenatis vitae risus, lectus sit facilisis vel nisi elit. Sit feugiat a
        placerat tempus, duis tristique nam risus tempor. Ac pharetra massa
        viverra platea. Sed facilisi id ut tempor sed. Purus leo at egestas
        fames diam, viverra feugiat varius quam. Bibendum pretium ultrices
        convallis platea condimentum nullam et turpis quisque. Sodales lacus,
        ornare molestie scelerisque feugiat. Donec est non a amet accumsan mi
        tortor. Consectetur risus accumsan aliquet velit lorem est ut id at.
        <br /> <br />
        Lectus ac, euismod cras non. Quis lectus facilisi sed sed diam tempus
        metus. Erat at mauris sit scelerisque justo, velit nunc aliquet.
        Scelerisque et mattis ultrices cum urna condimentum at venenatis ac. In
        diam viverra malesuada augue. Adipiscing pellentesque at id mauris
        lectus ut vitae, at non.
        <br /> <br /> Ornare diam nunc, et habitant donec. Tortor eu viverra
        pulvinar aliquam accumsan, in magna fusce. Gravida in lectus eros, eget
        cras ultrices. Dictum diam eget fermentum purus faucibus metus, enim
        pharetra tincidunt. Elit enim purus auctor tellus. Nunc eros volutpat,
        nulla quam. Leo, ornare consectetur laoreet nibh lorem lobortis. Nunc at
        dictumst gravida tortor sed pellentesque a orci diam.
      </Typograpghy>
    </Wrapper>
  );
};

export default Support;
