import React from "react";
import styled from "styled-components";
import Inner from "../components/Inner";
import MapContainer from "../components/MapContainer";
import PageTop from "../components/PageTop";
import { MailOutlined, PhoneOutlined, HomeOutlined } from "@ant-design/icons";
import Sinkwang from "../sinkwang.jpg";

const Location = styled.div`
  /* padding: 100px 0; */
  padding-bottom: 100px;
  p {
    font-size: 15px;
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  img {
    width: 50%;
  }
  .title {
    text-align: center;
    margin: 50px 0;
  }
  .title::after {
    content: "";
    display: block;
    width: 60px;
    margin: 20px auto;
    border-bottom: 3px solid #bcbcbc;
  }
  .icon {
    font-size: 40px;
    margin-right: 15px;
  }
  .text {
    margin: 10px;
  }
  .map {
    margin-top: 50px;
    width: 100%;
    height: 400px;
    /* width: 560px;
    height: 380px; */
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list {
    display: flex;
    align-items: center;
    padding: 15px 30px;
    border-bottom: 1px solid gray;
  }

  @media screen and (max-width: 768px) {
    .flex {
      flex-direction: column;
    }
    img {
      display: none;
    }
    .map {
      width: 90%;
      margin: 20px auto;
    }
    .title {
      margin: 10px 0;
    }
  }
`;

export default function WayToCome() {
  return (
    <>
      <PageTop
        title="ABOUT LOCATION"
        sub="찾아오시는길"
        text="오랜 경력과 노하우를 바탕으로 고객 여러분께 최고의 서비스와 만족으로 보답하겠습니다."
      />
      <Location>
        {/* <h2 className="title">오시는길</h2> */}
        <Inner className="flex">
          <img src={Sinkwang} alt="img" />
          <div>
            <div className="list">
              <HomeOutlined className="icon" />
              <div className="text">
                <h2>주소</h2>
                <p>중북 제천시 둔전로 49 고암동 608-5 (비행장 뒤편)</p>
              </div>
            </div>
            <div className="list">
              <PhoneOutlined className="icon" />
              <div className="text">
                <h2>연락처</h2>
                <p>
                  <a href="tel:043-644-8634">043-644-8634</a>
                </p>
                <p>
                  <a href="tel:010-8841-1144">010-8841-1144</a>
                </p>
              </div>
            </div>
            <div className="list">
              <MailOutlined className="icon" />
              <div className="text">
                <h2>e-mail</h2>
                <p>
                  <a href="mailto:ds3jyo@naver.com">ds3jyo@naver.com</a>
                </p>
              </div>
            </div>
          </div>
        </Inner>
        <Inner>
          <MapContainer />
        </Inner>
      </Location>
    </>
  );
}
