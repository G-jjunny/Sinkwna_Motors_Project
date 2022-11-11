import React from "react";
import styled from "styled-components";
import Inner from "../components/Inner";
import MapContainer from "../components/MapContainer";
import PageTop from "../components/PageTop";
import { MailOutlined, PhoneOutlined, HomeOutlined } from "@ant-design/icons";

const Location = styled.div`
  padding: 100px 0;
  p {
    font-size: 15px;
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  .icon {
    font-size: 40px;
    margin-right: 15px;
  }
  .text {
    margin: 10px;
  }
  .map {
    width: 560px;
    height: 380px;
  }
  .flex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .list {
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid gray;
  }

  @media screen and (max-width: 769px) {
    .flex {
      flex-direction: column;
    }
    .map {
      width: 80%;
    }
  }
`;

export default function WayToCome() {
  return (
    <>
      <PageTop
        title="ABOUT LOCATION"
        text="오랜 경력과 노하우를 바탕으로 고객 여러분께 최고의 서비스와 만족으로 보답하겠습니다."
      />
      <Location>
        <Inner className="flex">
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
                <h2>EMAIL</h2>
                <p>ds3jyo@naver.com</p>
              </div>
            </div>
          </div>
          <MapContainer />
        </Inner>
      </Location>
    </>
  );
}
