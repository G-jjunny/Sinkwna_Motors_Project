import styled from "styled-components";
import carrier from "../images/carrier.png";
import Inner from "./Inner";

const CService = styled.div`
  margin: auto 0;
  padding: 100px 0;
  /* background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(196, 208, 198, 1) 35%
  ); */
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(196, 208, 198, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  .flex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  h1 {
    font-size: 38px;
    text-align: center;
    padding: 20px 0;
  }
  .carrier-image {
    width: fit-content;
  }
  .carrier-image img {
    width: 400px;
    margin: auto 0;
  }
  ul {
    background-color: var(--bg2-color);
    list-style: none;
    margin: 0;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
  }
  li {
    padding: 2px 10px;
    font-size: 22px;
    background-color: var(--main2-color);
  }
  .re {
    background-color: var(--text2-color);
  }
  @media screen and (max-width: 768px) {
    .carrier-image img {
      width: 300px;
    }
    .flex {
      justify-content: space-around;
    }
  }
  @media screen and (max-width: 540px) {
    .flex {
      flex-direction: column;
    }
    ul {
      margin-top: 10px;
    }
  }
`;

export default function CarryService() {
  return (
    <CService>
      <Inner>
        <h1>삼성렉카 서비스</h1>
        <div className="flex">
          <div className="carrier-image">
            <img src={carrier} alt="img" />
          </div>
          <div className="area">
            <ul>
              <li>제천시내 전 지역</li>
              <li className="re">중앙고속도로</li>
              <li>제천 &lt;=&gt; 신림</li>
              <li className="re">제천, 평택간고속도로</li>
              <li>제천 &lt;=&gt; 동충주</li>
            </ul>
          </div>
        </div>
      </Inner>
    </CService>
  );
}
