import React from "react";
import styled from "styled-components";
// import SandingRoom from "../images/SandingRoom.jpg";
import Imported from "../images/수입차정비.jpg";
import Regular from "../images/일반차정비.jpg";
import Inner from "./Inner";

const Factory = styled.div`
  text-align: center;
  padding: 70px 0;
  h1 {
    margin: 0;
  }
  .sub {
    font-weight: 300;
  }
  p {
    margin-bottom: 50px;
    font-size: 20px;
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
    margin: 7px 14px;
    position: relative;
    width: fit-content;
    height: fit-content;
    img {
      width: 100%;
    }
    .cover {
      top: 0;
      position: absolute;
      height: calc(100% - 5px);
      width: 100%;
      /* background-color: rgba(50, 50, 50, 0.4); */
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 {
      color: #fff;
      font-size: 28px;
      font-weight: 300;
    }
    .cover:hover {
      opacity: 0;
      transition: opacity 0.5s;
    }
  }
  .drop {
    height: 200px;
    background-color: aliceblue;
    display: none;
  }
  @media screen and (max-width: 768px) {
    .row {
      flex-direction: column;
      align-items: center;
    }
    .contents {
      width: 90%;
      /* max-height: 400px; */
      img {
        max-height: 380px;
      }
    }
  }
`;

export default function Facilites() {
  return (
    <Factory>
      <Inner>
        <div className="title">
          <h1>FACILITIES</h1>
          <h1 className="sub">설비시설</h1>
        </div>
        <p>신광자동차의 주요 설비시설 입니다.</p>
        <div className="row row-3">
          {/* <div className="contents">
            <img src={SandingRoom} alt="sandingroom" />
            <div className="cover">
              <h1>샌딩룸</h1>
            </div>
          </div> */}
          <div className="contents">
            <img src={Imported} alt="Imported" />
            <div className="cover">
              <h1>수입차정비</h1>
            </div>
          </div>
          <div className="contents">
            <img src={Imported} alt="Imported" />
            <div className="cover">
              <h1>수입차정비</h1>
            </div>
          </div>
          <div className="contents">
            <img src={Regular} alt="Regular" />
            <div className="cover">
              <h1>일반차정비</h1>
            </div>
          </div>
        </div>
        <div className="drop">test</div>
      </Inner>
    </Factory>
  );
}
