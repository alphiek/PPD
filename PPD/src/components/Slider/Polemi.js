import React from "react";
import { usePolemiImages } from "../../hooks/usePolemiImages";
import { Slider } from "./Slider";

export const Polemi = () => {
  const data = usePolemiImages();
  return <Slider slides={data} />;
};
