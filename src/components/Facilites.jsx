import React from "react";
import styled from "styled-components";
import SandingRoom from "../images/SandingRoom.jpg";
import Inner from "./Inner";

const Factory = styled.div`
  text-align: center;
  margin-top: 300px;
  h1 {
    margin: 0;
  }
  .title::after {
    content: "";
    display: block;
    width: 150px;
    margin: 30px auto;
    border-bottom: 2px solid #000;
  }
  .contents {
    position: relative;
    width: fit-content;
    overflow: hidden;
    /* background-color: rgba(0, 0, 0, 0.4); */
    z-index: 5;
    h2 {
      color: #fff;
      position: absolute;
      z-index: 5;
      top: 120px;
      left: 115px;
    }
    img {
      width: 400px;
      height: 300px;
      width: min-content;
    }
  }
`;

export default function Facilites() {
  return (
    <Factory>
      <Inner>
        <div className="title">
          <h1>FACILITIES</h1>
          <h1>설비시설</h1>
        </div>
        <div className="contents">
          <img src={SandingRoom} alt="sandingroom" />
          <h2>샌딩룸</h2>
        </div>
      </Inner>
    </Factory>
  );
}
