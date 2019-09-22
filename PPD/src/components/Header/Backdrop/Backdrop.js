import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FadeIn } from '../../Animations/keyframes'

const BackdropCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 100;
  animation: ${FadeIn} 0.2s ease-in-out;
`

const Backdrop = ({ click }) => (
    <BackdropCover onClick={click} />
)

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
}

export default Backdrop