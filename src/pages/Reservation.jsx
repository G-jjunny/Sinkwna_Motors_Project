import React from "react";
import Inner from "../components/Inner";
import PageTop from "../components/PageTop";
import { PhoneOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ReserveContain = styled.div`
  padding: 100px 0;
  p {
    margin: 0;
  }
  .flex {
    display: flex;
    justify-content: space-evenly;
  }
  .icon-round {
    background-color: var(--main2-color);
    align-items: center;
    width: 150px;
    height: 150px;
    text-align: center;
    border-radius: 50%;
  }
  .icon {
    font-size: 90px;
    color: var(--black);
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function Reservation() {
  return (
    <>
      <PageTop
        title="CONTACT"
        text="오랜 경력과 노하우를 바탕으로 고객 여러분께 최고의 서비스와
              만족으로 보답하겠습니다."
      />
      <ReserveContain>
        <Inner className="flex">
          <div className="item">
            <div className="icon-round">
              <PhoneOutlined className="icon" />
            </div>
            <h2>전화예약</h2>
            <p>
              <a href="tel:043-644-8634">043-644-8634</a> /
              <a href="tel:043-644-8634"> 043-644-8634</a>
            </p>
          </div>
          <div className="item">
            <PhoneOutlined className="icon" />
            <h2>전화예약</h2>
            <p>
              <a href="tel:043-644-8634">043-644-8634</a> /
              <a href="tel:043-644-8634"> 043-644-8634</a>
            </p>
          </div>
        </Inner>
      </ReserveContain>
    </>
  );
}
