import React from "react";
import styled from "styled-components";
import Inner from "./Inner";
import Repair from "../images/repair.jpg";
import Repair2 from "../images/정비.jfif";

const Service = styled.div`
  /* padding: 30px 0; */
  h2,
  p {
    margin: 2px 10px;
    color: var(--black);
  }

  img {
    width: 280px;
    box-shadow: 5px 5px 8px gray;
    border-radius: 10px;
  }
  img:hover {
    cursor: pointer;
    scale: 103%;
    transition: 0.5s;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid var(--main2-color);
    padding: 30px 0;
  }
  .text {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    padding: 0;
    h2 {
      margin-top: 20px;
    }
    .flex {
      flex-direction: column;
      border: 0;
      padding: 20px 0;
    }
    img {
      width: 90%;
    }
    .text {
      /* margin: 0; */
      margin-left: 10px;
      justify-content: left;
    }
  }
`;
const Title = styled.h1`
  text-align: center;
`;

function User({ user }) {
  return (
    <Service>
      <Inner className="flex">
        <img src={user.img} alt="img" />
        <div className="text">
          <h2>{user.title}</h2>
          <p> - {user.text}</p>
        </div>
      </Inner>
    </Service>
  );
}

function UserList() {
  const contents = [
    {
      id: 1,
      img: Repair,
      title: "일반 정비",
      text: "안전한 차량관리, 소모품교환 등 합성자동차에서는 합리적인 정비가격, 정직과 신뢰로 고객분들을 맞이하겠습니다.",
    },
    {
      id: 2,
      img: Repair2,
      title: "보험/사고 수리",
      text: "신과자동차는 1급 종합정비업체로서, 자동차 사고의 정확한 수리견적(보험견적), 차체수리 및 수용성 보수도장 등 전문 장비와 인력이 항상 준비되어 있습니다.",
    },
    {
      id: 3,
      img: Repair,
      title: "차량 검사",
      text: "신광자동차에서는 고객님의 자동차 검사 사전 안내, 안전한 자동차 운행을 위한 안전도 검사, 배출가스 검사 등 검사기준과 방법을 잘 지키며, 최신 검사장비 등을 사용하여 자동차 종합검사소로서 최고수준의 검사 업무를 시행하고 있습니다.",
    },
  ];

  return (
    <div>
      <Title>SERVICE</Title>
      {contents.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
