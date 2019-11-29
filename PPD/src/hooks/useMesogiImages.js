import { useStaticQuery, graphql } from "gatsby";

export const useMesogiImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: { relativeDirectory: { eq: "mesogi" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
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