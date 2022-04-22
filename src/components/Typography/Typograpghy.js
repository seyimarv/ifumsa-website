import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

const Text = styled.div`
font-size: ${({ size }) => size || '1.4rem' };
color: ${({ color }) => color || colors.primary };
font-weight:  ${({ weight }) => weight || 600 };
line-height: ${({ lineHeight }) => lineHeight || '3rem' };
text-align: ${({ align }) => align || 'left'};
margin-top: ${({ mt }) => mt};
margin-bottom: ${({ mb }) => mb };
margin-left: ${({ ml }) => ml };
margin-right: ${({ mr }) => mr };
`

 
const Typograpghy = ({color, children, size, lineHeight, align, ...props}) => {
    return (
        <Text color={color} size={size} lineHeight={lineHeight} align={align} {...props}>
          {children}
        </Text>
    )
}

export default Typograpghy