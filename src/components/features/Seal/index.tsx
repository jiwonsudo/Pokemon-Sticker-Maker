import React, { useEffect } from "react";
import { useState, useRef, useCallback } from "react";

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

import { ContentProps } from "components/Contents";

import defaultImg from 'assets/default.png';

interface SealProps {
  id: string,
  title: string,
  imgUri: string,
  sealNumColor: string,
  sealBg: React.RefObject<HTMLDivElement>,
  rotateSeal: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  resetSeal: () => void,
}

const Seal = ({ sealInfo }: ContentProps) => {
  const sealBg = useRef<HTMLDivElement>(null);
  const [sealId, setSealId] = useState('');
  const [sealName, setSealName] = useState('');
  const [sealImgUri, setSealImgUri] = useState('');

  useEffect(() => {
    setSealId(sealInfo![0]);
    setSealName(sealInfo![1]);
    if (sealInfo![2] === '') {
      setSealImgUri(defaultImg);
    } else setSealImgUri(sealInfo![2]);
  }, [sealInfo, sealId, sealName, sealImgUri]);

  const rotateSeal = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cursorPosX = event.nativeEvent.offsetX;
    const cursorPosY = event.nativeEvent.offsetY;
    const rotateX = 1/10 * cursorPosY - 20;
    const rotateY = -2/15 * cursorPosX + 20;
    const sealDiv: HTMLDivElement = sealBg.current!;
    const glowDiv = sealBg.current!.children[3] as HTMLDivElement;
    
    sealDiv.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    glowDiv.style.backgroundPosition = `${cursorPosX/4 + cursorPosY/4}%`;
    
  }, []);

  const resetSeal = useCallback(() => {
    const sealDiv: HTMLDivElement = sealBg.current!;
    const glowDiv = sealBg.current!.children[3] as HTMLDivElement;
    sealDiv.style.transform = 'none';
    glowDiv.style.backgroundPosition = '100%';
  }, []);

  const props = {
    id: sealId,
    title: sealName,
    imgUri: sealImgUri,
    sealNumColor: '#9DD6F9',
    sealBg: sealBg,
    rotateSeal: rotateSeal,
    resetSeal: resetSeal,
  }

  return <SealView {...props} />;
}

const SealView = React.memo(({ id, title, imgUri, sealNumColor, sealBg, rotateSeal, resetSeal } : SealProps) => {
  return (
    <SealContainer>
      <SealBackground ref={ sealBg }>
        <SealIndexContainer>
          <SealNumber $bgColor={ sealNumColor }>{ id }</SealNumber>
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
});

export default Seal;