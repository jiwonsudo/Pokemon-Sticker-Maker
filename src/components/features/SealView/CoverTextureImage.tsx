import styled from "styled-components";
import stickerTextureImg from 'assets/sticker_texture.png';

const CoverTextureImage = styled.img.attrs({ src: stickerTextureImg })`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
  border-radius: 30px;
  z-index: 2;
  object-fit: cover;
  mix-blend-mode: darken;
  opacity: 40%;
`;

export default CoverTextureImage;