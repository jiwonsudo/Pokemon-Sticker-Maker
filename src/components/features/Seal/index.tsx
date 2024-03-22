import { useRef } from "react";

import SealContainer from "./SealContainer";
import CreatorTitle from "./CreatorTitle";
import CreatorTitleContainer from "./CreatorTitleContainer";
import CreatorTitleImage from "./CreatorTitleImage";
import CreatorTitleSection from "./CreatorTitleSection";
import GlowEffectCover from "./GlowEffectCover";
import ImageContainer from "./ImageContainer";
import SealBackground from "./SealBackground";
import SealCover from "./SealCover";
import SealIndexContainer from "./SealIndexContainer";
import SealNumber from "./SealNumber";
import SealTitle from "./SealTitle";
import Image from "./Image";
import CoverTextureImage from "./CoverTextureImage";

import testImage from 'assets/test.png';

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
          <CoverTextureImage></CoverTextureImage>
        </SealIndexContainer>
        <ImageContainer>
          <Image src={ imgUri } />
        </ImageContainer>
        <CreatorTitleSection>
          <CreatorTitleContainer>
            <CreatorTitleImage></CreatorTitleImage>
            <CreatorTitle>Wonkémon</CreatorTitle>
            <CoverTextureImage></CoverTextureImage>
          </CreatorTitleContainer>
        </CreatorTitleSection>
        <GlowEffectCover></GlowEffectCover>
      </SealBackground>
      <SealCover onMouseMove={ rotateSeal } onMouseLeave={ resetSeal }></SealCover>
    </SealContainer>
  );
}

export default Seal;