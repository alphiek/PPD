import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "landing.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.hero.childImageSharp.fluid
      return (
        <BackgroundImage
          id='about'
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#fff`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  min-height: 90vh;
  position: relative;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`

export default StyledBackgroundSection