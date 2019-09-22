import { keyframes } from 'styled-components'

export const Bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-3px);
  }
`

export const Grow = keyframes`
  0% {
    transform: scale(0); opacity: 0;
  }
  70% {
    transform: scale(1.1); opacity: 0.8;
  }
  85% {
    transform: scale(0.95); opacity: 0.9;
  }
  100% {
    transform: scale(1); opacity: 1;
  }
`

export const SlideDown = keyframes`
  from {
    top: -300px;
  }
  to {
    top: 0px;
  }
`


export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FadeOutOverlay = keyframes`
  from {
     opacity: 1;
     z-index: 9000;
  }
  to {
    opacity: 0;
    z-index: -20;
  }
`
