import { useRef } from "react";

import styled from "styled-components";

import testImage from 'assets/test.png';
import logo from 'assets/logo.svg';
import stickerTexture from 'assets/sticker_texture.png';

const SealContainer = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
`;

const SealBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f3f3;
  overflow: hidden;
`;

const SealIndexContainer = styled.div`
  height: 30px;
  margin: 10px;
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  font-weight: 500;
  box-shadow: 1px 1px 3px 1px #d6d6d6;
`;

const SealNumber = styled.div<{ $bgColor?: string }>`
  height: 30px;
  margin-right: 5px;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  background-color: ${props => props.$bgColor ? props.$bgColor : 'yellow'};
  border-radius: 30px;
`;

const SealTitle = styled.div`
  padding-right: 10px;
`;

const ImageContainer = styled.div`
  margin: 20px;
  width: calc(100% - 40px);
  height: 260px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: drop-shadow(1px 1px 3px #848484);
`;

const CoverTextureImg = styled.img.attrs({ src: stickerTexture })`
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

const CreatorTitleSection = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const CreatorTitleContainer = styled.div`
  margin: 0 10px;
  padding: 5px;
  height: 15px;
  background-color: white;
  position: relative;
  display: inline-flex;
  font-size: 14px;
  border-radius: 30px;
  box-shadow: 1px 1px 3px 1px #d6d6d6;
`;

const CreatorTitleImage = styled.img.attrs({ src: logo })`
  margin-right: 5px;
  width: 15px;
  aspect-ratio: 1 / 1;
  opacity: 80%;
`;

const CreatorTitle = styled.div``;

const SealCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
  z-index: 4;
`;

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


interface SealProps {
  id: string,
  title: string,
  imgUri: string,
  sealBg: React.RefObject<HTMLDivElement>,
  rotateSeal: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  resetSeal: () => void,
}

const Seal = () => {
  const sealBg = useRef<HTMLDivElement>(null);

  const rotateSeal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cursorPosX = event.nativeEvent.offsetX;
    const cursorPosY = event.nativeEvent.offsetY;
    const rotateX = 1/10 * cursorPosY - 20;
    const rotateY = -2/15 * cursorPosX + 20;
    const sealDiv: HTMLDivElement = sealBg.current!;
    const glowDiv = sealBg.current!.children[3] as HTMLDivElement;
    
    sealDiv.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    glowDiv.style.backgroundPosition = `${cursorPosX/4 + cursorPosY/4}%`;
    
  }

  const resetSeal = () => {
    const sealDiv: HTMLDivElement = sealBg.current!;
    const glowDiv = sealBg.current!.children[3] as HTMLDivElement;
    sealDiv.style.transform = 'none';
    glowDiv.style.backgroundPosition = '100%';
  };

  const props = {
    id: '103',
    title: '파이리',
    imgUri: testImage,
    sealBg: sealBg,
    rotateSeal: rotateSeal,
    resetSeal: resetSeal,
  }

  return <SealView {...props} />;
}

const SealView = ({ id, title, imgUri, sealBg, rotateSeal, resetSeal } : SealProps) => {
  return (
    <SealContainer>
      <SealBackground ref={ sealBg }>
        <SealIndexContainer>
          <SealNumber>{ id }</SealNumber>
          <SealTitle>{ title }</SealTitle>
          <CoverTextureImg></CoverTextureImg>
        </SealIndexContainer>
        <ImageContainer>
          <Image src={ imgUri } />
        </ImageContainer>
        <CreatorTitleSection>
          <CreatorTitleContainer>
            <CreatorTitleImage></CreatorTitleImage>
            <CreatorTitle>Wonkémon</CreatorTitle>
            <CoverTextureImg></CoverTextureImg>
          </CreatorTitleContainer>
        </CreatorTitleSection>
        <GlowEffectCover></GlowEffectCover>
      </SealBackground>
      <SealCover onMouseMove={ rotateSeal } onMouseLeave={ resetSeal }></SealCover>
    </SealContainer>
  );
}

export default Seal;