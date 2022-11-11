import React from "react";
import styled from "styled-components";
import Inner from "./Inner";

const PermitBox = styled.div`
  text-align: center;
`;

export default function Permit() {
  return (
    <PermitBox>
      <Inner>
        <h1>인·허가&주요장비</h1>
      </Inner>
    </PermitBox>
  );
}
