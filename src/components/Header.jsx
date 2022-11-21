import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = styled.header`
  /* background-color: var(--dark); */
  /* 스크롤시 백그라운드 속성값 변경 */
  background-color: ${(props) =>
    props.isScroll ? "transparent" : "var(--dark)"};
  transition: all 0.5s ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  /* 스크롤시 폰트 색 변경 */
  color: ${(props) => (props.isScroll ? "var(--dark)" : "var(--main2-color)")};
  /* color: var(--main2-color); */
  .nav {
    display: flex;
    align-items: center;
    text-align: center;
    /* justify-content: space-between; */
    .logo {
      font-size: 25px;
      font-weight: 500;
      cursor: pointer;
      margin: 15px 20px;
    }
    .nav-menu {
      /* margin-top: 50px; */
      list-style: none;
      display: flex;
      padding: 5px;
      position: absolute;
      right: 0;
      z-index: 5;
    }
    li {
      font-size: 15px;
      padding: 10px 15px;
    }
    li:hover {
      color: var(--ivory);
      transition: 0.5s;
      text-decoration: underline;
    }
    .toggled-btn {
      display: none;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      background-color: var(--dark);
      color: var(--text-color);
      .c1 {
        padding: 0;
      }
      .nav-menu {
        flex-direction: column;
        width: 100%;
        transition: 0.5s;
        background-color: var(--dark);
        margin-top: 55px;
        color: var(--text-color);
        /* display: ${(props) => (props.isToggleOpen ? "block" : "none")}; */
      }
      .active {
        margin-top: -180px;
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
      }
      li {
        border-radius: 5px;
        margin-left: 10px;
      }
      li:hover {
        background-color: var(--main2-color);
      }
      .toggled-btn {
        display: block;
        position: absolute;
        font-size: 25px;
        right: 19px;
        top: 19px;
        color: var(--text-color);
      }
      .toggled-btn:hover {
        color: var(--ivory);
      }
    }
  }
`;

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setIsScroll(true) : setIsScroll(false);
    });
  }, [isScroll]);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    console.log(isToggleOpen);
  };
  const reset = () => {
    setIsToggleOpen(false);
  };
  const headerani = isToggleOpen ? "nav-menu" : "nav-menu active";
  return (
    <Navbar
      isToggleOpen={isToggleOpen}
      className={isToggleOpen}
      isScroll={isScroll}
    >
      {/* <Inner className="c1"> */}
      <div className="nav">
        <div className="logo">
          <StyledLink to="/">신광자동차</StyledLink>
        </div>
        <ul className={headerani} onClick={reset}>
          {/* <li>
              <StyledLink to="/">Home</StyledLink>
            </li> */}
          <li>
            <StyledLink to="./intro">회사소개</StyledLink>
          </li>
          <li>
            <StyledLink to="./vehicle">차량시공</StyledLink>
          </li>
          <li>
            <StyledLink to="/reservation">예약안내</StyledLink>
          </li>
          <li>
            <StyledLink to="/waytocome">찾아오시는길</StyledLink>
          </li>
        </ul>
        <MenuOutlined className="toggled-btn" onClick={handleToggleOpen} />
      </div>
      {/* </Inner> */}
    </Navbar>
  );
}
