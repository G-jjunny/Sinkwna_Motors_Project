import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import styled from "styled-components";
import { send } from "emailjs-com";

const Mail = styled.div`
  padding: 0 10%;
  /* label {
    margin: 4px 0;
  } */
  /* .flex {
    display: flex;
    justify-content: space-between;
    input {
      width: 250px;
    }
  } */
  /* form {
    padding: 0 50px;
    display: flex;
    flex-direction: column;
  } */
  @media screen and (max-width: 768px) {
    padding: 0;
    form {
      padding: 0;
    }
  }
`;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 20,
  },
};
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };

export const AntdForm = () => {
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
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Mail>
        <div className="title">
          <h1 className="sub">문의하기</h1>
        </div>
        {/* <Form
          {...layout}
          // name="nest-messages"
          // onFinish={onFinish}
          // validateMessages={validateMessages}
          // ref={form}
          // onSubmit={sendEmail}
          // name="nest-messages"
        > */}
        <form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          // validateMessages={validateMessages}
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex">
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
              <Input
                name="name"
                placeholder="이름을 입력해주세요"
                size="large"
              />
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
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 11,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              value="send"
              // onClick={() => {
              //   console.log(onFinish);
              // }}
            >
              전송
            </Button>
            {/* <input type="submit" value="Send" /> */}
          </Form.Item>
        </form>
        {/* </Form> */}

        {/* atnd */}
      </Mail>
    </>
  );
};
