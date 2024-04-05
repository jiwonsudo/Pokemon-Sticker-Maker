import { useState } from 'react';

import Seal from './features/Seal';
import SealSection from './features/ContentsWrapper/SealSection';
import MainWrapper from './features/ContentsWrapper/MainWrapper';
import Controls from './features/Controls';

interface ContentProps {
  updateSeal?: (id: string, name: string, img: File | string) => void,
  sendSealImg?: (targetDiv: HTMLDivElement) => void,
  sealInfo?: Array<string | File>,
  sealResult?: HTMLDivElement,
}

const Content = () => {
  const [currSealInfo, setCurrSealInfo] = useState<Array<string | File>>(['0501', '수댕이', '']);
  const [sealResult, setSealResult] = useState<HTMLDivElement>();

  const updateSeal = (id: string, name: string, img: File | string) => {
    setCurrSealInfo([id, name, img]);
  }

  const sendSealImg = (targetDiv: HTMLDivElement) => {
    setSealResult(targetDiv);
  }

  const props: ContentProps = {
    updateSeal: updateSeal,
    sendSealImg: sendSealImg,
    sealInfo: currSealInfo,
    sealResult: sealResult,
  };

  return <ContentView {...props}/>;
}

const ContentView = ({ updateSeal, sendSealImg, sealInfo, sealResult }: ContentProps) => {
  return (
    <SealSection>
      <MainWrapper>
        <Seal sealInfo={ sealInfo } sendSealImg={ sendSealImg }></Seal>
        <Controls updateSeal={ updateSeal } sealResult={ sealResult }></Controls>
      </MainWrapper>
    </SealSection>
  );
}

export default Content;
export type { ContentProps };
