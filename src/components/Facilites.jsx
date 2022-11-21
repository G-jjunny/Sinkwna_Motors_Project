import React from "react";
import styled from "styled-components";
import SandingRoom from "../images/SandingRoom.jpg";
import Inner from "./Inner";

const Factory = styled.div`
  text-align: center;
  padding: 70px 0;
  h1 {
    margin: 0;
  }
  p {
    margin-bottom: 50px;
    font-size: 25px;
  }
  .row {
    display: flex;
  }
  .row-3 {
    justify-content: space-between;
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
    height: fit-content;
    img {
      /* width: 450px; */
      height: 350px;
      width: min-content;
    }
    .cover {
      top: 0;
      position: absolute;
      height: calc(100% - 5px);
      width: 100%;
      background-color: rgba(50, 50, 50, 0.4);
      z-index: 1;
    }
    h1 {
      position: absolute;
      color: #fff;
      top: 150px;
      left: 130px;
      font-weight: 300;
    }
    .cover:hover {
      opacity: 0;
      transition: opacity 0.5s;
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
        <p>신광자동차의 주요 설비시설 입니다.</p>
        <div className="row row-3">
          <div className="contents">
            <img src={SandingRoom} alt="sandingroom" />
            <div className="cover">
              <h1>샌딩룸</h1>
            </div>
          </div>
          <div className="contents">
            <img src={SandingRoom} alt="sandingroom" />
            <div className="cover">
              <h1>샌딩룸</h1>
            </div>
          </div>
          <div className="contents">
            <img src={SandingRoom} alt="sandingroom" />
            <div className="cover">
              <h1>샌딩룸</h1>
            </div>
          </div>
        </div>
      </Inner>
    </Factory>
  );
}
