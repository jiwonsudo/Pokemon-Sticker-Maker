import styled from "styled-components";

const FullCover = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0; left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export default FullCover;