import React from "react";
import styled from "styled-components";
import Inner from "../components/Inner";

const TextGroup = styled.div`
  /* text-align: left; */
  text-align: center;
  margin: 10% auto;
  max-width: 70%;
  position: relative;
  z-index: 2;
  color: #fff;
  h1 {
    font-size: 38px;
    font-weight: 900;
    margin: 0;
  }
  .sub {
    font-weight: 300;
    margin: 10px 0;
  }
  .sub::after {
    content: "";
    display: block;
    width: 150px;
    margin: 30px auto;
    border-bottom: 2px solid #fff;
  }
  p {
    margin: 5px 0;
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
    h1 {
      font-size: 33px;
      font-weight: 600;
    }
    p {
      font-size: 15px;
    }
  }
`;

export default function PageTop(props) {
  return (
    <>
      <div className="page-top">
        <TextGroup>
          <Inner>
            <h1>{props.title}</h1>
            <h1 className="sub">{props.sub}</h1>
            <p>{props.text}</p>
          </Inner>
        </TextGroup>
      </div>
    </>
  );
}
