import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetaData = () => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              social {
                  fb
                  insta
                  email
              }
            }
          }
        }
      `
    )
    return site.siteMetadata
  }