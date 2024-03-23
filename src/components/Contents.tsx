import Seal from './features/Seal';
import SealSection from './features/ContentsWrapper/SealSection';
import MainWrapper from './features/ContentsWrapper/MainWrapper';
import ControlPanel from './features/ControlPanel';

const Content = () => {
  return <ContentView/>;
}

const ContentView = () => {
  return (
    <SealSection>
      <MainWrapper>
        <Seal></Seal>
        <ControlPanel></ControlPanel>
      </MainWrapper>
    </SealSection>
  );
}

export default Content;