import styled from "styled-components";
import FooterSlider from "./FooterSlider";
import Inner from "./Inner";
import Slider from "./Slider";
import StyledLink from "./StyledLink";

const StyledFooter = styled.div`
  /* color: var(--text2-color); */
  color: var(--gray);
  h1,
  h2,
  h3 {
    margin: 0;
  }
  .fp {
    font-size: 13px;
  }

  .btn-group {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 5px;
  }
  button {
    margin: 0 10px;
    font-size: 13px;
  }

  background-color: var(--black);
  /* background-color: #fff0; */
  text-align: center;
  margin: 0;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 500px) {
  }
`;
const handleScroll = (e) => {
  if (!window.scrollY) return;
  // 현재 위치가 이미 최상단일 경우 return

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// export default handleScroll;

export default function Footer() {
  return (
    <>
      {/* <FooterSlider /> */}
      <StyledFooter>
        <Inner>
          <h2>신광자동차공업사</h2>
          <div className="btn-group">
            <StyledLink to="/reservation">
              <button className="btn btn--white" onClick={handleScroll}>
                예약안내
              </button>
            </StyledLink>
            <StyledLink to="/waytocome">
              <button className="btn btn--white" onClick={handleScroll}>
                찾아오시는길
              </button>
            </StyledLink>
          </div>
          <p className="fp">
            상호명 : 신광자동차공업사 | 대표 : 정동수
            {/* | 사업자 등록번호 :
            ㅈㅁㄷㄱㅁㅈㄷㄱ */}
          </p>
          <p className="fp">
            주소 : 충북 제천시 둔전로 49 고암동 608-5(비행장 뒤편)
          </p>
          <p className="fp">TEL : 043-644-8634 | PHONE : 010-8841-1144</p>

          <Slider />
        </Inner>
        <p className="fp">Copyright ⓒ 2022 신광자동차. All Right Reserved</p>
      </StyledFooter>
    </>
  );
}
