import React from "react";
import { usePaphosImages } from "../../hooks/usePaphosImages";
import { Slider } from "./Slider";

export const Paphos = () => {
  const data = usePaphosImages();
  return <Slider slides={data} />;
};