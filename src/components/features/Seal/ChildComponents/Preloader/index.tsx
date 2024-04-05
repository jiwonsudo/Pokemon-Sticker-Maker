import FullCover from "./FullCover";
import IndicatorContainer from "./IndicatorContainer";
import IndicatorSubtitleLabel from "./IndicatorSubtitleLabel";
import IndicatorTitleLabel from "./IndicatorTitleLabel";
import SpinnerAnimation from "./SpinnerAnimation";

import spinner from "assets/spinner.svg";

interface PreloaderProps {
  spinnerAnimationUrl: string,
}

const Preloader = () => {
  const props: PreloaderProps = {
    spinnerAnimationUrl: spinner,
  }

  return <PreloaderView {...props}/>;
}

const PreloaderView = ({ spinnerAnimationUrl }: PreloaderProps) => {
  return (
      <FullCover>
        <IndicatorContainer>
          <IndicatorTitleLabel>이미지 가공 중</IndicatorTitleLabel>
          <IndicatorSubtitleLabel>잠시만 기다려 주세요...<br/>최대 30초 정도 소요됩니다.</IndicatorSubtitleLabel>
          <SpinnerAnimation type="image/svg+xml" data={ spinnerAnimationUrl }></SpinnerAnimation>
        </IndicatorContainer>
      </FullCover>
  );
}

export default Preloader;