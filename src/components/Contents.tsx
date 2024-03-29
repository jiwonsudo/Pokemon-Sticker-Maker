import { useState } from 'react';

import Seal from './features/Seal';
import SealSection from './features/ContentsWrapper/SealSection';
import MainWrapper from './features/ContentsWrapper/MainWrapper';
import Controls from './features/Controls';

interface ContentProps {
  updateSeal?: (id: string, name: string, img: File | string) => void,
  sealInfo?: Array<string | File>,
}

const Content = () => {
  const [currSealInfo, setCurrSealInfo] = useState<Array<string | File>>(['0501', '수댕이', '']);

  const updateSeal = (id: string, name: string, img: File | string) => {
    setCurrSealInfo([id, name, img]);
  }

  const props: ContentProps = {
    updateSeal: updateSeal,
    sealInfo: currSealInfo,
  };

  return <ContentView {...props}/>;
}

const ContentView = ({ updateSeal, sealInfo }: ContentProps) => {
  return (
    <SealSection>
      <MainWrapper>
        <Seal sealInfo={ sealInfo }></Seal>
        <Controls updateSeal={ updateSeal }></Controls>
      </MainWrapper>
    </SealSection>
  );
}

export default Content;
export type { ContentProps };
