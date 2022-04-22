import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Input = styled.input`
border:  ${({ coloredBorder }) => coloredBorder ? `1px solid ${colors.green}` : 'none'};
padding: 2rem;
background-color: ${({ background }) => background || colors.white};
border-radius: 10px;
display: block;
width: 100%;
font-size: 2rem;
::placeholder {
 color: ${({ color }) => color || colors.gray1};
 font-size: 2rem;
 font-weight: 500;
 line-height: 2.4rem;
}
`;