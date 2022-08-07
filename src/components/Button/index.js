
import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Button = styled.button`
padding: 1.4rem 4rem;
color: ${({ isGhost}) => (isGhost ? colors.secondary : colors.white )};
background: ${({ isGhost, isPrimary}) => (isGhost ? "none" : isPrimary ? colors.primary : colors.secondary )};
border-radius: 4px;
border: ${({ isGhost }) => (isGhost ? `1px solid ${colors.secondary}` : 'none')};
font-size: 1.8rem;
line-height: 2.7rem;
letter-spacing: -0.015em;
font-weight: 700;
position: relative;
`