import styled from "styled-components";
import logoImg from 'assets/logo.svg';

const CreatorTitleImage = styled.img.attrs({ src: logoImg })`
  margin-right: 5px;
  width: 15px;
  aspect-ratio: 1 / 1;
  opacity: 80%;
`;

export default CreatorTitleImage;