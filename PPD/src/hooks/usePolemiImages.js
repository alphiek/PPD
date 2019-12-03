import { useStaticQuery, graphql } from "gatsby";

export const usePolemiImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "polemi" } }) {
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
