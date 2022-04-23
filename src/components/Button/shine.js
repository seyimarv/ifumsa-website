import styled from "styled-components";
import { keyframes } from "styled-components";

const shineAnimation = keyframes`
0%  { left: 0; opacity: 0; }
	5% {opacity: 0.1}
	48% {opacity: 0.2}
	80% {opacity: 0.0}
	100% { left: 82%; opacity: 0}
`;
export const Shine = styled.div`
  width: 15%;
  height: 100%;
  animation-name: ${shineAnimation};
  animation-duration: 1.5s;
  position: absolute;
  top: 0px;
  top: 50%;
  transform: translateY(-50%) skew(-10deg, 0deg);
  left: 0;
  animation-iteration-count: infinite;
  animation-delay: 1s;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.03) 1%,
    rgba(255, 255, 255, 0.6) 30%,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0.85) 70%,
    rgba(255, 255, 255, 0.85) 71%,
    rgba(255, 255, 255, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );
`;
