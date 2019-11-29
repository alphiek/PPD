import React from "react";
import { useMesogiImages } from "../../hooks/useMesogiImages";
import { Slider } from "./Slider";

export const Mesogi = () => {
  const data = useMesogiImages();
  return <Slider slides={data} />;
};
