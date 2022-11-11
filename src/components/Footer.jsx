import styled from "styled-components";

const StyledFooter = styled.div`
  color: var(--text2-color);
  h1,
  h2,
  h3 {
    margin: 0;
  }
  .fp {
    font-size: 15px;
  }

  background-color: var(--black);
  /* background-color: #fff0; */
  text-align: center;
  margin: 0;
  padding: 5vw 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <h2>신광자동차공업사</h2>
      <p className="fp">상호명 : 신광자동차공업사 | 대표 : 정동수</p>
      <p className="fp">
        주소 : 충북 제천시 둔전로 49 고암동 608-5(비행장 뒤편)
      </p>
      <p className="fp">TEL : 043-644-8634 | PHONE : 010-8841-1144</p>
      <br />
      <p className="fp">ⓒ 2022 신광자동차. All Right Reserved</p>
    </StyledFooter>
  );
}
