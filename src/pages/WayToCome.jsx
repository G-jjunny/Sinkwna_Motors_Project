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
    width: 150px;
    margin: 30px auto;
    border-bottom: 2px solid #000;
  }
  h1 {
    text-align: center;
  }
  .sub {
    font-weight: 300;
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

    /* 지도가 이미지태그로 인식됨 img태그는 사용ㄴㄴ 클래스나 id값 사용할 것 */

    /* img {
      display: none;
    } */
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
        text="신광자동차를 방문하시는 길."
      />
      <Location>
        <div className="title">
          <h1>신광자동차</h1>
          <h1 className="sub">오시는길</h1>
        </div>
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
