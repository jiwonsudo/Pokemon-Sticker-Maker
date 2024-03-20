import styled from "styled-components";

const GlowEffectCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
  background: linear-gradient(
    150deg,
    transparent 20%,
    #fefff1 30%,
    #fff8e7 35%,
    transparent 40%
  );
  filter: brightness(1) opacity(40%);
  mix-blend-mode: color-dodge;
  background-size: 300%;
  background-position: 100%;
  z-index: 3;
`;

export default GlowEffectCover;