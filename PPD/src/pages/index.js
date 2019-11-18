import React from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import { Services } from "../components/Services/Services";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Gallery } from "../components/Gallery/Gallery";
import { Contact } from "../components/Contact/Contact";

const IndexPage = () => (
  <>
    <LandingPage />
    <Services />
    <Testimonial />
    <Gallery />
    <Contact />
  </>
);

export default IndexPage;
