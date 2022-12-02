import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";

const Mail = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: rgba(245, 245, 245, 1); */
  background-color: rgba(255, 255, 255, 0.97);
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
`;

export const MailForm = () => {
  const form = useRef();

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
          console.log(result.text);
          alert("메세지를 전송하였습니다.");
        },
        (error) => {
          console.log(error.text);
          alert("메세지 전송에 실패하였습니다.");
        }
      );
  };

  return (
    <Mail>
      <div className="title">
        <h1 className="sub">문의하기</h1>
      </div>
      {/* <Form ref={form} onSubmit={sendEmail} className="col"> */}
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <Form.Item
            name={["user", "name"]}
            label="이름"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input
            type="email"
            name="email"
            placeholder="이메일 주소를 입력해주세요"
            size="large"
          />
        </Form.Item>
        <Form.Item label="내용">
          <Input.TextArea name="text" rows={7} />
        </Form.Item>
        {/* <Button type="primary" htmlType="submit" value="send">
          전송
        </Button> */}
        <button className="btn btn--submit" type="submit" value="send">
          전송
        </button>
      </form>
      {/* </Form> */}
    </Mail>
  );
};
