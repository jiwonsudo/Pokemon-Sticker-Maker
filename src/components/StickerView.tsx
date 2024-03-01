import styled from 'styled-components';

import testImage from 'test.png';
import logo from 'logo.svg';

const SealContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  background-color: #434343;
`;

const SealBackground = styled.div`
  width: 300px;
  height: 400px;
  background-color: #ffffff;
`;

const SealIndexContainer = styled.div`
  height: 30px;
  margin: 10px;
  display: inline-flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  font-weight: 500;
  box-shadow: 1px 1px 3px 1px #d6d6d6;
`;

const SealNumber = styled.div<{ $bgColor? : string}>`
  height: 30px;
  margin-right: 5px;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  background-color: ${props => props.$bgColor ? props.$bgColor : 'yellow'};
  border-radius: 30px;
`;

const SealTitle = styled.div`
  padding-right: 10px;
`;

const ImageContainer = styled.div`
  margin: 20px;
  width: calc(100% - 40px);
  height: 260px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${testImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

const CreatorTitleSection = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const CreatorTitleContainer = styled.div`
  margin: 0 10px;
  padding: 5px;
  background-color: white;
  display: inline-flex;
  font-size: 14px;
  border-radius: 30px;
  box-shadow: 1px 1px 3px 1px #d6d6d6;
`;

const CreatorTitleImage = styled.div`
  margin-right: 5px;
  width: 15px;
  aspect-ratio: 1 / 1;
  background-image: url(${logo});
  background-size: contain;
  opacity: 80%;
`;

const CreatorTitle = styled.div`
`;

const Seal = () => {
  return <SealView/>
};

const SealView = ({}) => {
  return(
    <SealContainer>
      <SealBackground>
        <SealIndexContainer>
          <SealNumber>15331</SealNumber>
          <SealTitle>파이리</SealTitle>
        </SealIndexContainer>
        <ImageContainer>
          <Image/>
        </ImageContainer>
        <CreatorTitleSection>
          <CreatorTitleContainer>
            <CreatorTitleImage></CreatorTitleImage>
            <CreatorTitle>Wonkémon</CreatorTitle>
          </CreatorTitleContainer>
        </CreatorTitleSection>
      </SealBackground>
    </SealContainer>
  );
};

export default Seal;