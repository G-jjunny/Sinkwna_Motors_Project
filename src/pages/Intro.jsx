import React from "react";
import styled from "styled-components";
import Inner from "../components/Inner";
import PageTop from "../components/PageTop";

const TextGroup = styled.div`
  text-align: center;
  /* text-align: left; */
  margin: 10% auto;
  max-width: 50%;
  position: relative;
  z-index: 2;
  h1 {
    font-size: 38px;
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
  .title::after {
    content: "";
    display: block;
    width: 150px;
    margin: 30px auto;
    border-bottom: 2px solid #fff;
  }
  .sub {
    font-weight: 300;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 15px;
    }
  }
`;
export default function Intro() {
  return (
    <>
      <PageTop
        color="white"
        title="COMPANY INFO"
        sub="회사소개"
        text="신광자동차는 오랜 경력과 노하우를 바탕으로 고객 여러분께 최고의 서비스와 만족으로 보답하겠습니다."
      ></PageTop>
      <div>
        <TextGroup>
          <Inner>
            <p>Welcome to</p>
            <h1>SINKWANG MOTORS</h1>
            <p className="welcome">
              신광자동차공업사 방문을 환영합니다. <br />
              저희 신광자동차공업사는 제천지역 삼성렉카 및 자동차검사, 공업사
              업무 뿐 아니라 삼성/동부/KB 화재 등 각종 보험사 상담까지 진행하고
              있습니다. 오랜 경력과 노하우를 바탕으로 찾아주시는 모든 고객
              여러분께 최고의 만족과 서비스로 보답하겠습니다.
            </p>
            {/* <RollingGear className="text-bg" /> */}
          </Inner>
        </TextGroup>
      </div>
      <div className="ceo_bg">
        <TextGroup>
          <div className="title">
            <h1>
              SINCE <span className="sub">2000</span>
            </h1>
            <h1 className="sub">회사연혁</h1>
          </div>
          <h2>
            n년동안 쌓아온 경력과 노하우를 바탕으로 고객 여러분께 최고의
            서비스와 만족으로 보답하겠습니다.
          </h2>
          <ul>
            {/* <li>2000</li>
            <li>2000</li>
            <li>2000</li>
            <li>2000</li> */}
          </ul>
        </TextGroup>
      </div>
    </>
  );
}
