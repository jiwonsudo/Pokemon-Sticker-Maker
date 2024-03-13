import styled from "styled-components";

import testImage from 'assets/test.png';
import logo from 'assets/logo.svg';

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

const SealNumber = styled.div<{ $bgColor?: string }>`
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: drop-shadow(1px 1px 3px #848484);
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

const CreatorTitle = styled.div``;

interface SealProps {
  id: string,
  title: string,
  imgUri: string,
}

const Seal = () => {
  const props = {
    id: '103',
    title: '파이리',
    imgUri: testImage,
  }

  return <SealView {...props} />;
}

const SealView = ({ id, title, imgUri } : SealProps) => {
  return (
    <SealBackground>
      <SealIndexContainer>
        <SealNumber>{ id }</SealNumber>
        <SealTitle>{ title }</SealTitle>
      </SealIndexContainer>
      <ImageContainer>
        <Image src={ imgUri } />
      </ImageContainer>
      <CreatorTitleSection>
        <CreatorTitleContainer>
          <CreatorTitleImage></CreatorTitleImage>
          <CreatorTitle>Wonkémon</CreatorTitle>
        </CreatorTitleContainer>
      </CreatorTitleSection>
    </SealBackground>
  );
}

export default Seal;