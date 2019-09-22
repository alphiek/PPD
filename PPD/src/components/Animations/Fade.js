import React from 'react'
import Fade from 'react-reveal/Fade'


export const FadeIn = ({ children, delay }) => {
    return (
        <Fade ssrFadeout up delay={delay}>
            {children}
        </Fade>
    )
}

export const FadeInRight = ({ children, delay, duration }) => {
    return (
        <Fade ssrFadeout right delay={delay} duration={duration}>
            {children}
        </Fade>
    )
}

export const FadeInLeft = ({ children, delay }) => {
    return (
        <Fade ssrFadeout left cascade delay={delay}>
            {children}
        </Fade>
    )
}