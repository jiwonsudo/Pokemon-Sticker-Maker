import Seal from './Seal';
import SealSection from './SealSection';
import ContentWrapper from './ContentWrapper';
import Controller from './Controller';

const Content = () => {
  return (
    <SealSection>
      <ContentWrapper>
        <Seal></Seal>
        <Controller></Controller>
      </ContentWrapper>
    </SealSection>
  );
}

export default Content;