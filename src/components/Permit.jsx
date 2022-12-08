import React from "react";
import styled from "styled-components";
import Inner from "./Inner";
import SandingRoom from "../images/SandingRoom.jpg";

const PermitBox = styled.div`
  padding: 70px 0;
  img {
    width: 25vw;
    max-width: 300px;
    min-width: 220px;
  }
  h1 {
    text-align: center;
  }
  h2 {
    margin: 10px;
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
    margin: 0 20px;
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
    justify-content: space-evenly;
    /* justify-content: space-between; */
    flex-flow: wrap;
  }
  @media screen and (max-width: 768px) {
    .flex {
      justify-content: space-evenly;
    }
    img {
      width: 150px;
      min-width: 150px;
    }
  }
  @media screen and (max-width: 500px) {
    .contents {
      margin: 0;
      min-width: 120px;
    }
    img {
      width: 120px;
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
        <p>{list.text}</p>
      </div>
    </div>
  );
}

export default function Permit() {
  const MachineList = [
    {
      id: 1,
      img: SandingRoom,
      title: "허가증1",
      text: "하는 일 이것 저것 ",
    },
    {
      id: 2,
      img: "https://placeimg.com/200/200/car",
      title: "허가증2",
      text: "하는 일 이것 저것",
    },
    {
      id: 3,
      img: "https://placeimg.com/200/200/car",
      title: "허가증3",
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
