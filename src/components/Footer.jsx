import styled from "styled-components";

const StyledFooter = styled.div`
  h1,
  h2,
  h3 {
    margin: 0;
  }
  background-color: var(--bg2-color);
  text-align: center;
  margin: 0;
  padding: 5vw 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <h2>신광자동차공업사</h2>
      <p>상호명 : 신광자동차공업사 | 대표 : 정동수</p>
      <p>주소 : 충북 제천시 둔전로 49 고암동 608-5(비행장 뒤편)</p>
      <p>전화 : 043-644-8634 | 휴대폰 : 010-8841-1144</p>
    </StyledFooter>
  );
}
