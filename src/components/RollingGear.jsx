import styled from "styled-components";
import Gear from "../images/gear_8.svg";

const RollingCircle = styled.div`
  .circle {
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 30000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
    top: calc(50% - 15vw);
    left: calc(50% - 15vw);
    z-index: -1;
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
    @media screen and (max-width: 500px) {
      .circle {
        width: 70vw;
        height: 70vw;
        top: calc(50% - 35vw);
        left: calc(50% - 35vw);
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
