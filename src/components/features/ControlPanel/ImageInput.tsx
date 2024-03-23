import styled from "styled-components";

const ImageInput = styled.input.attrs({ type: 'file' })`
  width: 100%;
  height: 100%;
  position: absolute;
  color: transparent;
  background-color: transparent;
  z-index: 4;
  opacity: 0;
`;

export default ImageInput;