import styled from "styled-components";

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    padding: 0 12px;
  }
`;
export default (props) => <Inner {...props} />;
