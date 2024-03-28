import React, { useEffect } from "react";
import { useState, useRef, useCallback } from "react";

import SealContainer from "./ChildComponents/SealContainer";
import CreatorTitle from "./ChildComponents/CreatorTitle";
import CreatorTitleContainer from "./ChildComponents/CreatorTitleContainer";
import CreatorTitleImage from "./ChildComponents/CreatorTitleImage";
import CreatorTitleSection from "./ChildComponents/CreatorTitleSection";
import GlowEffectCover from "./ChildComponents/GlowEffectCover";
import ImageContainer from "./ChildComponents/ImageContainer";
import SealBackground from "./ChildComponents/SealBackground";
import SealCover from "./ChildComponents/SealCover";
import SealIndexContainer from "./ChildComponents/SealIndexContainer";
import SealNumber from "./ChildComponents/SealNumber";
import SealTitle from "./ChildComponents/SealTitle";
import Image from "./ChildComponents/Image";
import CoverTextureImage from "./ChildComponents/CoverTextureImage";

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
  const [sealImg, setSealImg] = useState<string>('');

  useEffect(() => {
    const sealData = sealInfo!

    setSealId(String(sealData[0]));
    setSealName(String(sealData[1]));

    if (sealData[2] instanceof File) {
      const fileReader = new FileReader();
      const imgFile = sealData[2];

      fileReader.onload = () => {
        setSealImg(String(fileReader.result));
      }
      fileReader.readAsDataURL(imgFile);
    } else setSealImg(defaultImg);
  }, [sealInfo, sealId, sealName, sealImg]);

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
    imgUri: sealImg,
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