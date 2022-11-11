import React from "react";
import styled from "styled-components";
import Inner from "../components/Inner";

const TextGroup = styled.div`
  text-align: left;
  margin: 10% auto;
  max-width: 70%;
  position: relative;
  z-index: 2;
  h1 {
    font-size: 38px;
    font-weight: 900;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 18px;
  }
  .text-bg {
    position: absolute;
  }
  .welcome {
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export default function PageTop(props) {
  return (
    <>
      <div className="page-top">
        <TextGroup>
          <Inner>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </Inner>
        </TextGroup>
      </div>
    </>
  );
}
