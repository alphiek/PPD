import React from "react";
import { PageTitle } from './PageTitle'
import BackgroundSection from './BackgroundSection'
import Nav from '../Nav/Nav'

const LandingPage = () => {
  return (
      <BackgroundSection>
        <PageTitle />
        <Nav />
      </BackgroundSection>
  );
};

export default LandingPage;
