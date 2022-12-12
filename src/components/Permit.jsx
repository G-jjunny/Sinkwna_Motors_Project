import React from "react";
import styled from "styled-components";
import Inner from "./Inner";
import SandingRoom from "../images/SandingRoom.jpg";
import Business from "../images/사업장.jpg";
import TestRoom from "../images/검사장_1.webp";
import GCompany from "../images/프로미카지정우수업체.jpg";

const PermitBox = styled.div`
  padding: 70px 0;
  img {
    /* width: 50%; */
    width: 250px;
    height: 220px;
  }
  img:hover {
    scale: 1.05;
    transition: 0.5s;
  }
  h1 {
    text-align: center;
  }
  h2 {
    margin: 10px 0 30px 0;
    font-size: 22px;
    font-weight: 400;
  }
  h2::before {
    content: "";
    display: block;
    width: 150px;
    margin: 10px auto;
    border-bottom: 1px solid #000;
  }
  .sub {
    font-weight: 300;
  }
  .title::after {
    content: "";
    display: block;
    width: 150px;
    margin: 30px auto;
    border-bottom: 2px solid #000;
  }
  .contents {
    /* background-color: aqua; */
    margin: 0 12px 10px 12px;
    width: 30%;
    max-width: min-content;
    /* display: flex;
    flex-direction: column; */
  }
  .text-group {
    text-align: center;
  }
  .flex {
    display: flex;
    /* justify-content: space-evenly; */
    /* justify-content: space-between; */
    flex-flow: wrap;
  }
  @media screen and (max-width: 768px) {
    .contents {
      width: 50%;
    }
    .flex {
      justify-content: space-evenly;
    }
    img {
      width: 200px;
      height: 170px;
      min-width: 150px;
    }
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 18px;
    }
    .contents {
      margin: 0;
      min-width: 120px;
    }
    img {
      width: 100%;
      /* width: 120px; */
      min-width: 120px;
    }
  }
`;

function Machine({ list }) {
  return (
    <div className="contents">
      <img src={list.img} alt="mac1" />
      <div className="text-group">
        <h2>{list.title}</h2>
        {/* <p>{list.text}</p> */}
      </div>
    </div>
  );
}

export default function Permit() {
  const MachineList = [
    {
      id: 1,
      img: Business,
      title: "종합검사 지정 정비사업장",
      text: "하는 일 이것 저것 ",
    },
    {
      id: 2,
      img: GCompany,
      title: "DB손해보험 지정 우수업체",
      text: "하는 일 이것 저것",
    },
    {
      id: 3,
      img: TestRoom,
      title: "검사장",
      text: "하는 일 이것 저것",
    },
    {
      id: 4,
      img: "https://placeimg.com/200/200/car",
      title: "장비 이름",
      text: "하는 일 이것 저것",
    },
    {
      id: 5,
      img: "https://placeimg.com/200/200/car",
      title: "장비 이름",
      text: "하는 일 이것 저것",
    },
    {
      id: 6,
      img: "https://placeimg.com/200/200/car",
      title: "장비 이름",
      text: "하는 일 이것 저것",
    },
  ];
  return (
    <>
      <PermitBox>
        <div className="title">
          <h1>PETMIT & EQUIPMENT</h1>
          <h1 className="sub">인·허가&주요장비</h1>
        </div>
        <Inner className="flex">
          {MachineList.map((list) => (
            <Machine list={list} key={list.id} />
          ))}
        </Inner>
      </PermitBox>
    </>
  );
}
