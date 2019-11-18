import React from 'react'
import styled from 'styled-components'
import { colors } from '../Utils/colors'

export const Dividers = () => {
    return (
        <Divider />
    )
}


const Divider = styled.hr`
 width: 17%;
 border: none;
 border-radius: 20px;
 height: 0.4rem;
 margin: 2rem 0 2.5rem;
 background-color: ${colors.orange};
`