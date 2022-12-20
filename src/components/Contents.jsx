import React from "react";
import styled from "styled-components";
import Inner from "./Inner";
import Repair from "../images/repair.jpg";
import Repair2 from "../images/정비.jfif";
import Repair3 from "../images/repair2.jpg";
import Carry from "../images/삼성렉카.png";
import Insurance from "./Insurance";
import Slider from "./Slider";
import { Divider, List, Typography } from "antd";
import useScrollFadeIn from "../hooks/useScrollFadeInOthers";

const Service = styled.div`
  padding: 70px 0 0;
  background-color: var(--main-bg);
  h2,
  p {
    margin: 2px 10px;
    color: var(--black);
  }
  h1 {
    text-align: center;
    margin: 0;
  }
  .sub {
    font-weight: 300;
  }
  h2 {
    font-size: 25px;
  }

  .service-img {
    width: 250px;
    height: 160px;
    box-shadow: 5px 5px 8px gray;
    border-radius: 10px;
  }
  .service-img:hover {
    cursor: pointer;
    scale: 103%;
    transition: 0.5s;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border-bottom: 1px solid var(--main2-color); */
    padding: 30px 0;
  }
  .text {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  .carry {
    /* background-color: #3569fe; */
    text-align: center;
    h2,
    p {
      /* color: var(--text-color); */
    }
    h2 {
      font-size: 25px;
      color: #fff;
    }
    .service-img {
      height: 240px;
    }
    .ant-list {
      /* margin-left: 20px; */
    }
    .ant-list-header {
      background-color: var(--dark);
      border-radius: 5px 5px 0 0;
    }

    ul {
      list-style: none;
      li {
        display: inline-block;
        width: 100%;
        font-size: 18px;
        font-weight: 600;
      }
      li:hover {
        color: #fff;
        /* background-color: var(--bg-color); */
        background-color: var(--main-color);
        scale: 1.03;
        transition: 0.3s;
        border-radius: 5px;
      }
    }
  }
  .con::after {
    content: "";
    display: block;
    width: 100%;
    margin: 10px auto;
    border-bottom: 1px solid #000;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 70px 0 50px 0;
    .con-title {
      margin-top: 20px;
    }
    .flex {
      flex-direction: column;
      border: 0;
      padding: 20px 0;
    }
    .service-img {
      width: 60%;
      height: 30vw;
      margin-bottom: 20px;
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
  ::after {
    content: "";
    display: block;
    width: 150px;
    margin: 30px auto;
    border-bottom: 2px solid #000;
  }
`;
const data = [
  "제천시내 전지역",
  "중앙고속도로",
  "제천↔신림",
  "제천↔단양",
  "제천/평택간 고속도로",
  "제천↔동충주",
];

function User({ user }) {
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0),
    1: useScrollFadeIn("left", 1, 0),
    2: useScrollFadeIn("up", 1, 0),
    3: useScrollFadeIn("down", 1, 0),
    4: useScrollFadeIn("left", 1, 0.2),
    5: useScrollFadeIn("down", 1, 0.2),
  };
  return (
    <>
      {/* <div>{user.slide}</div> */}
      <Inner className="con">
        <div className="flex">
          <img
            src={user.img}
            className="service-img"
            alt="img"
            {...animatedItem[0]}
          />
          <div className="text">
            <h2 className="con-title" {...animatedItem[1]}>
              {user.title}
            </h2>
            <p {...animatedItem[4]}> - {user.text}</p>
          </div>
        </div>
      </Inner>
    </>
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
      img: Repair3,
      title: "차량 검사",
      text: "신광자동차에서는 고객님의 자동차 검사 사전 안내, 안전한 자동차 운행을 위한 안전도 검사, 배출가스 검사 등 검사기준과 방법을 잘 지키며, 최신 검사장비 등을 사용하여 자동차 종합검사소로서 최고수준의 검사 업무를 시행하고 있습니다.",
    },
    {
      id: 3,
      img: Repair2,
      title: "보험/사고 수리",
      text: "신과자동차는 1급 종합정비업체로서, 자동차 사고의 정확한 수리견적(보험견적), 차체수리 및 수용성 보수도장 등 전문 장비와 인력이 항상 준비되어 있습니다.",
      slide: <Slider />,
    },
  ];
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0),
    1: useScrollFadeIn("left", 1, 0),
  };
  return (
    <Service>
      <Title>
        <h1>SERVICE</h1>
        <h1 className="sub">서비스</h1>
      </Title>
      {contents.map((user) => (
        <User user={user} key={user.id} />
      ))}
      <div className="carry">
        <Inner className="flex">
          <img
            src={Carry}
            alt="img"
            className="service-img"
            {...animatedItem[0]}
          />
          <div className="text" {...animatedItem[1]}>
            <List
              size="small"
              header={<h2>삼성렉카 서비스</h2>}
              // footer={
              //   <div>
              //     TEL: <a href="tel:043-648-1144">043-648-1144</a>
              //   </div>
              // }
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </Inner>
      </div>
      <Insurance />
    </Service>
  );
}

export default UserList;
