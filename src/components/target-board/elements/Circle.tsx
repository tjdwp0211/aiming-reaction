import React from "react";
import styled from "@emotion/styled";
import { CircleProps } from "../../../type/targetBoardType";

function Circle({ radius, background }: CircleProps) {
  return <CircleElement size={radius} background={background} />;
}

export default Circle;

const CircleElement = styled.div<{ size: number; background: string }>`
  width: ${(props) => props.size}%;
  height: ${(props) => props.size}%;
  position: absolute;
  border-radius: 50%;
  border: 3px solid white;
  background-color: ${(props) => props.background};
`;
