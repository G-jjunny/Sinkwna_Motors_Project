import React from "react";
import Inner from "../components/Inner";
import PageTop from "../components/PageTop";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { MailForm } from "../components/MailForm";
import { AntdForm } from "../components/AntdForm";

const ReserveContain = styled.div`
  /* padding: 100px 0; */
  /* padding-bottom: 100px; */

  p {
    margin: 0;
  }
  h1,
  h2 {
    text-align: center;
  }
  .sub {
    font-weight: 300;
  }
  .title {
    margin-top: 50px;
  }
  .reverse {
    color: #fff;
  }
  .title::after {
    content: "";
    display: block;
    width: 150px;
    margin: 30px auto;
    border-bottom: 2px solid #000;
  }
  .reverse::after {
    content: "";
    display: block;
    width: 150px;
    margin: 30px auto;
    border-bottom: 2px solid #fff;
  }
  .flex {
    display: flex;
    justify-content: space-evenly;
  }
  .icon-round {
    background-color: var(--main2-color);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: 2s;
    .icon {
      margin: auto;
      font-size: 90px;
      color: var(--black);
    }
  }
  .icon-round:hover {
    transform: rotateY(-180deg);
    transition: 2s;
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
        sub="예약 & 문의"
        text="신광자동차 예약안내 및 문의사항"
      />
      <ReserveContain>
        <div className="title">
          <h1 className="sub">예약안내</h1>
        </div>
        <Inner className="flex">
          <div className="item">
            <div className="icon-round">
              <PhoneOutlined className="icon" />
            </div>
            <h2>전화예약</h2>
            <p>
              <a href="tel:043-644-8634">043-644-8634</a>
            </p>
            <p>
              <a href="tel:043-644-8634"> 010-8841-1144</a>
            </p>
          </div>
          <div className="item">
            <div className="icon-round">
              <MailOutlined className="icon" />
            </div>
            <h2>e-mail</h2>
            <p>
              <a href="mailto:ds3jyo@naver.com">ds3jyo@naver.com</a>
            </p>
          </div>
        </Inner>
        <div className="contact-bg">
          <Inner>
            <MailForm />
            {/* <AntdForm /> */}
          </Inner>
        </div>
      </ReserveContain>
    </>
  );
}
