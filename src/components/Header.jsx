import React, { useState } from "react";
import styled from "styled-components";
import Inner from "./Inner";
import StyledLink from "./StyledLink";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = styled.header`
  background-color: var(--bg2-color);
  /* position: fixed; */
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  .logo {
    font-size: 30px;
    font-weight: 600;
    color: var(--main2-color);
    cursor: pointer;
  }
  .nav-menu {
    list-style: none;
    display: flex;
    padding: 0;
  }
  li {
    color: var(--main2-color);
    font-size: 20px;
    padding: 10px 8px;
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
    .logo {
      padding-bottom: 5px;
    }
    .nav-menu {
      flex-direction: column;
      width: 100%;
      display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    }
    li {
      border-radius: 5px;
    }
    li:hover {
      background-color: var(--main2-color);
    }
    .toggled-btn {
      display: block;
      position: absolute;
      font-size: 20px;
      right: 12px;
      top: 12px;
      color: var(--main2-color);
    }
    .toggled-btn:hover {
      color: var(--ivory);
    }
  }
`;

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    // console.log(isToggleOpen);
  };

  return (
    <Navbar>
      <Inner>
        <Nav isToggleOpen={isToggleOpen}>
          <div className="logo">
            <StyledLink to="/">신광자동차</StyledLink>
          </div>
          <ul className="nav-menu">
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
        </Nav>
      </Inner>
    </Navbar>
  );
}
