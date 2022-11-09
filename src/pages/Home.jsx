import React from "react";
import styled from "styled-components";
import Inner from "../components/Inner";
import RollingGear from "../components/RollingGear";

const TextGroup = styled.div`
  text-align: center;
  margin: 10% auto;
  max-width: 50%;
  position: relative;
  z-index: 2;
  h1 {
    font-size: 38px;
  }
  p {
    font-size: 18px;
  }
  .text-bg {
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export default function Home() {
  return (
    <>
      <div className="bg-sinkwang">
        <Inner>
          <div className="main-section">
            <TextGroup>
              <h2>제천 최대 자동차 공업사</h2>
              <h1>신광자동차 공업사</h1>
            </TextGroup>
          </div>
        </Inner>
      </div>
      <TextGroup>
        <Inner>
          <h1>Sinkwang Motorts</h1>
          <p>
            신광자동차공업사 방문을 환영합니다. <br />
            저희 신광자동차공업사 제천지역 삼성렉카 및 자동차검사, 공업사 업무
            뿐 아니라 삼성/동부/KB 화재 등 각종 보험사 상담까지 진행하고
            있습니다. 오랜 경력과 노하우를 바탕으로 여러분께 최고의 만족으로
            보답하겠습니다.
          </p>
          <RollingGear className="text-bg" />
        </Inner>
      </TextGroup>
    </>
  );
}
