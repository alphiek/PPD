import React from "react";
import styled from "styled-components";
import { useSiteMetaData } from '../../hooks/useSiteMetaData'
import { Fb, Insta, Mail } from '../SocialIcons/SocialIcons'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const SocialLinks = styled.a`
  display: flex;
  align-items: center;
`;

export const SocialMediaLinks = ({ color }) => {
  const { social } = useSiteMetaData();
  return (
    <Wrapper>
      <SocialLinks
        href={social.fb}
        aria-label="Facebook Link"
        target="blank"
        rel="noopener noreferrer"
      >
        <Fb color={color} />
      </SocialLinks>
      <SocialLinks
        href={social.insta}
        aria-label="Instagram Link"
        target="blank"
        rel="noopener noreferrer"
      >
        <Insta color={color} />
      </SocialLinks>
      <SocialLinks
        href={`mailto:${social.email}`}
        aria-label="Email Link"
        target="blank"
        rel="noopener noreferrer"
      >
        <Mail color={color} />
      </SocialLinks>
    </Wrapper>
  );
};
