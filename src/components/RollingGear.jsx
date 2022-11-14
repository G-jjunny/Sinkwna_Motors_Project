import styled from "styled-components";
import Gear from "../images/gear_8.svg";

const RollingCircle = styled.div`
  .circle {
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5); */
    /* background-color: var(--main2-color); */
    animation-name: spin;
    animation-duration: 15000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
    top: calc(50% - 15vw);
    left: calc(50% - 15vw);
    z-index: -1;
    /*   transform: rotate(3deg); */
    /* transform: rotate(0.3rad);/ */
    /* transform: rotate(3grad); */
    /* transform: rotate(.03turn);  */
  }
  .gear {
    z-index: -1;
    color: aliceblue;
  }

  @media screen and (max-width: 768px) {
    .circle {
      width: 50vw;
      height: 50vw;
      top: calc(50% - 25vw);
      left: calc(50% - 25vw);
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

export default function RollingGear() {
  return (
    <RollingCircle>
      <div className="circle">
        <img src={Gear} className="gear" alt="gear" />
      </div>
    </RollingCircle>
  );
}
