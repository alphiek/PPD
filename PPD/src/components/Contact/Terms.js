import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Terms = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  return (
    <>
      {data.allFile.edges.map((file, index) => {
        return (
          <a
            style={{ color: "white" }}
            key={`pdf-${index}`}
            target="_blank"
            rel="noopener noreferrer"
            href={file.node.publicURL}
            download
          >
            {`${file.node.name} of Use, `}
          </a>
        );
      })}
    </>
  );
};
export default Terms;
