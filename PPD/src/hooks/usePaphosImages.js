import { useStaticQuery, graphql } from "gatsby";

export const usePaphosImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: { relativeDirectory: { eq: "paphos" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );
  return allFile;
};