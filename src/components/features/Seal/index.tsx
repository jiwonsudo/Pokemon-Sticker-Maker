import React, { useState, useRef, useCallback, useEffect } from "react";

import removeBackground, { Config } from "@imgly/background-removal";

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
import SealNumberLabel from "./ChildComponents/SealNumberLabel";
import SealTitle from "./ChildComponents/SealTitle";
import Image from "./ChildComponents/Image";
import CoverTextureImage from "./ChildComponents/CoverTextureImage";
import Spinner from "./ChildComponents/Preloader";

import { ContentProps } from "components/Contents";

import defaultImg from 'assets/default.png';

interface SealProps {
  id: string,
  title: string,
  imgUrl: string,
  sealNumColor: string,
  sealBg: React.RefObject<HTMLDivElement>,
  rotateSeal: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  resetSeal: () => void,
  isLoading: boolean,
}

const Seal = ({ sealInfo, sendSealImg }: ContentProps) => {
  const sealBg = useRef<HTMLDivElement>(null);
  const [sealId, setSealId] = useState('');
  const [sealName, setSealName] = useState('');
  const [sealImgUrl, setSealImgUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const sealNumColorPicker = useCallback(() => {
    const colorArr: Array<string> = ['#9DD6F9', '#a5f99d', '#f9f79d', '#f9ba9d', '#f9a29d', '#9da8f9', '#e09df9'];
    const min = Math.ceil(0);
    const max = Math.floor(colorArr.length);
    return colorArr[Math.floor(Math.random() * (max - min + 1)) + min];
  }, []);

  useEffect(() => {
    const sealData = sealInfo!

    let config: Config = {
      progress: (key, current, total) => {
        console.log(`${key}: ${current} of ${total}`);
        if (key === 'compute:inference' && current === 1) {
          setIsLoading(false);
        }
      }
    };

    setSealId(String(sealData[0]));
    setSealName(String(sealData[1]));

    if (sealData[2] instanceof File) {
      setIsLoading(true);
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const imgUrl = String(fileReader.result);
        try {
          const bgRemovedImg: Blob = await removeBackground(imgUrl, config);
          setSealImgUrl(URL.createObjectURL(bgRemovedImg));
        } catch (err) {
          console.error('Error while processing image:', err);
        }
      }
      fileReader.readAsDataURL(sealData[2]);
    } else setSealImgUrl(defaultImg);

    sendSealImg!(sealBg!.current!);
  }, [sealInfo, sendSealImg]);

  const props = {
    id: sealId,
    title: sealName,
    imgUrl: sealImgUrl,
    sealNumColor: sealNumColorPicker(),
    sealBg: sealBg,
    rotateSeal: rotateSeal,
    resetSeal: resetSeal,
    isLoading: isLoading,
  }

  return <SealView {...props} />;
}

const SealView = React.memo(({ id, title, imgUrl, sealNumColor, sealBg, rotateSeal, resetSeal, isLoading } : SealProps) => {
  return (
    <>
      { isLoading ? <Spinner/> : null}
      <SealContainer>
        <SealBackground ref={ sealBg }>
          <SealIndexContainer>
            <SealNumberLabel $bgColor={ sealNumColor }>{ id }</SealNumberLabel>
            <SealTitle>{ title }</SealTitle>
            <CoverTextureImage></CoverTextureImage>
          </SealIndexContainer>
          <ImageContainer>
            <Image src={ imgUrl } />
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
    </>
  );
});

export default Seal;