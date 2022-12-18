import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const Main = styled.div`
  animation-name: fade-in;
  animation-duration: 3000ms;
  .main {
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .top-name {
    font-size: 45px;
    font-weight: 700;
  }
  @media screen and (max-width: 500px) {
    .top-name {
      font-size: 35px;
    }
  }
  @keyframes fade-in {
    from {
      scale: 1.5;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;

export default function MainCarousel() {
  return (
    <>
      <Carousel autoplay effect="fade">
        <div>
          {/* <div style={contentStyle}> */}
          <div className="bg-sinkwang bg-1">{/* </div> */}</div>
        </div>
        <div>
          <div className="bg-sinkwang bg-2"></div>
        </div>
        <div>
          <div className="bg-sinkwang bg-3"></div>
        </div>
        <div>
          <div className="bg-sinkwang bg-4"></div>
        </div>
      </Carousel>
      <div className="cover">
        <Main>
          <h2 className="main">제천 최고 1급 자동차 공업사</h2>
          <h1 className=" main top-name"> 신광자동차 공업사</h1>
        </Main>
      </div>
    </>
  );
}
