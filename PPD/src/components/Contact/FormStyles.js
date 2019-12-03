import styled from "styled-components";
import { colors } from "../Utils/colors";

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "left right";
  @media (max-width: 1180px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
      "left"
      "right";
  }
`;
export const LeftWrapper = styled.div`
  grid-area: left;
  width: 85%;
  @media (max-width: 1180px) {
    width: 100%;
  }
`;

export const RightWrapper = styled.div`
  grid-area: right;
  width: 90%;
  @media (max-width: 1180px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.input`
  border: none;
  border-bottom: 0.17rem solid rgba(255, 255, 255, 0.6);
  width: 100%;
  padding: 1.8rem 0em;
  background: transparent;
  color: white;
`;

export const Label = styled.label`
  position: relative;
`;
export const Message = styled.textarea`
  border: none;
  border-left: 0.17rem solid rgba(255, 255, 255, 0.6);
  margin-bottom: 0.7em;
  padding: 0 1rem 0 1rem;
  width: 100%;
  background-color: transparent;
`;
export const ErrorMessage = styled.p`
  font-family: "Open-sans", Arial, Helvetica, sans-serif;
  margin: 0.5rem 0;
  line-height: 140%;
  color: red;
  float: right;
  text-align: right;
  width: 80%;
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  margin-left: 0.4rem;
  z-index: 200;
  float: left;
`;

export const CustomCheckbox = styled.div`
  border: 0.08em solid white;
  margin-top: 2rem;
  height: 1.5em;
  width: 1.5em;
  position: relative;
  float: left;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  position: absolute;
`;

export const ConsentText = styled.p`
  float: right;
  width: 90%;
  color: white;
  margin: 1.8rem 0;
  color: white;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
`;

export const Submit = styled.button`
  margin-top: 1em;
  padding: 1rem 0;
  letter-spacing: 0.4px;
  width: 100%;
  background: #ff512f;
  background: -webkit-linear-gradient(to bottom, #f09819, #fa9917);
  background: linear-gradient(to bottom, #f09819, #fa9917);
  color: ${colors.textnav};
  font-weight: 700;
  transition: 300ms ease-in-out all;
  &:hover {
    box-shadow: 21px 21px 24px -10px rgba(0, 0, 0, 0.15);
    background: #ff512f;
    background: -webkit-linear-gradient(to top, #f09819, #fa9917);
    background: linear-gradient(to top, #f09819, #fa9917);
    color: white;
  }
`;
