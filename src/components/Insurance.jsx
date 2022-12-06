import styled from "styled-components";
import Inner from "./Inner";
import Slider from "./Slider";

const Insur = styled.div`
  text-align: center;
  padding: 20px 0;
  p {
    margin: 20px 0;
  }

  /* color: var(--text2-color); */
  /* background-color: var(--black); */
`;

export default function Insurance() {
  return (
    <Insur>
      <Inner>
        <h2>보험수리</h2>
        <p>
          신광자동차공업사 에서는 전차종 뿐만 아니라 전보험 수리상담을
          진행해드리고 있습니다.
        </p>
        <Slider />
        {/* <ProductSlider /> */}
      </Inner>
    </Insur>
  );
}
