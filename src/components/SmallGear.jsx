import styled from "styled-components";
import Gear from "../images/gear_8.svg";

const Gearsmall = styled.div`
  .circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5); */
    /* background-color: var(--main2-color); */
    animation-name: spin;
    animation-duration: 30000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
  }
  .gear {
    width: 150px;
    animation-name: spin;
    animation-duration: 30000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    .circle {
      /* width: 50vw;
      height: 50vw;
      top: calc(50% - 25vw);
      left: calc(50% - 25vw); */
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function SmallGear() {
  return (
    <Gearsmall>
      {/* <div className="circle"> */}
      <img src={Gear} className="gear" alt="gear" />
      {/* </div> */}
    </Gearsmall>
  );
}
