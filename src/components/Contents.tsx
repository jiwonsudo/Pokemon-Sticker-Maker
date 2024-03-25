import Seal from './features/Seal';
import SealSection from './features/ContentsWrapper/SealSection';
import MainWrapper from './features/ContentsWrapper/MainWrapper';
import ControlPanel from './features/ControlPanel';

interface ContentProps {
  getSealInfo: (id: string, name: string, imgUri: string) => void,

}

const Content = () => {

  const props: ContentProps = {
    getSealInfo: (id: string, name: string, imgUri: string) => {
      // TODO: write func to create(draw) Seal with above params
    }
  };

  return <ContentView {...props}/>;
}

const ContentView = ({ getSealInfo }: ContentProps) => {
  return (
    <SealSection>
      <MainWrapper>
        <Seal></Seal>
        <ControlPanel getSealInfo={ getSealInfo }></ControlPanel>
      </MainWrapper>
    </SealSection>
  );
}

export default Content;
export type { ContentProps };
