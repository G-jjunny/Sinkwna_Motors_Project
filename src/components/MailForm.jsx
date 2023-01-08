import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, message, Form, Input } from "antd";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeInOthers";

const Mail = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: rgba(245, 245, 245, 1); */
  background-color: rgba(255, 255, 255, 0.96);
  padding: 0 50px 100px 50px;
  border-radius: 10px;

  input {
    /* max-width: 500px; */
  }
  label {
    min-width: 50px;
    text-align: end;
  }

  .col {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    justify-content: space-between;
    input {
      min-width: 350px;
    }
  }
  .btn {
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    .row {
      display: flex;
      flex-direction: column;
    }
    label {
      width: 80px;
    }
    .btn {
      margin-left: 80px;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0 20px 100px 20px;
    .row {
      input {
        min-width: 280px;
        width: 100%;
      }
    }
    input {
      min-width: 280px;
    }
  }
`;

export const MailForm = () => {
  const form = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5jlgjb7",
        "template_7cew2jo",
        form.current,
        "hm7DCsslWOXLN-Zi7"
      )
      .then(
        (result) => {
          messageApi.open({
            type: "success",
            content: "메세지를 전송하였습니다.",
          });
        },
        (error) => {
          messageApi.open({
            type: "error",
            content: "메세지 전송에 실패하였습니다.",
          });
        }
      );
  };

  return (
    <Mail>
      {contextHolder}
      <div className="title">
        <h1 className="sub">문의하기</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <Form.Item
            name={["user", "name"]}
            label="이름"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input name="name" placeholder="이름을 입력해주세요" size="large" />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="전화번호"
            rules={[
              {
                required: true,
                message: "Please input your phoneNumber!",
              },
            ]}
          >
            <Input
              type="tel"
              name="phone"
              placeholder="전화번호를 입력해주세요"
              size="large"
            />
          </Form.Item>
        </div>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input
            name="email"
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            size="large"
          />
        </Form.Item>
        <Form.Item name={["user", "text"]} label="내용">
          <Input.TextArea name="text" rows={7} placeholder="문의하실 내용" />
        </Form.Item>
        <button className="btn btn--submit" type="submit" value="send">
          전송
        </button>
      </form>
    </Mail>
  );
};
