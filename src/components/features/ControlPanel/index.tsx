import Button from "./Button";
import Label from "./Label";
import TextField from "./TextField";
import ButtonIcon from "./ButtonIcon";
import LineContainer from "./LineContainer";
import ControlsContainer from "./ControlsContainer";

import picIcon from 'assets/upload.svg';
import genIcon from 'assets/sticker.svg';
import downIcon from 'assets/download.svg';
import ImageInput from "./ImageInput";

interface ControllerProps {
  picBtnProps: { [key: string]: string },
  genBtnProps: { [key: string]: string },
  downBtnProps: { [key: string]: string },
  onUploadImg: (event: React.FormEvent<HTMLInputElement>) => void,
  onGenerate: () => void,
  onDownloadSeal: () => void,
  picIcon: string,
  genIcon: string,
  downIcon: string,
}

const Controller = () => {
  const onUploadImg = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const newImage = input.value;
    alert(`File Selected: ${newImage}`);
  }

  const props: ControllerProps = {
    picBtnProps: {
      $bgColor: '#54E50C',
      $color: '#323F2C',
      $activeBgColor: '#2e7908',
      $activeColor: '#171d14',
    },
    genBtnProps: {
      $bgColor: '#f0780e',
      $color: '#572d06',
      $activeBgColor: '#a85309',
      $activeColor: '#170b01',
    },
    downBtnProps: {
      $bgColor: '#0e7deb',
      $color: '#03214b',
      $activeBgColor: '#0848a3',
      $activeColor: '#01070f',
    },
    onUploadImg: onUploadImg,
    onGenerate: () => {},
    onDownloadSeal: () => {},
    picIcon: picIcon,
    genIcon: genIcon,
    downIcon: downIcon,
  };

  return <ControllerView {...props} />;
};

const ControllerView = ({ picBtnProps, genBtnProps, downBtnProps, onUploadImg, onGenerate, onDownloadSeal, picIcon, genIcon, downIcon } : ControllerProps) => {
  return (
    <ControlsContainer>
      <LineContainer>
        <Label>도감번호</Label>
        <TextField></TextField>
      </LineContainer>
      <LineContainer>
        <Label>이름</Label>
        <TextField></TextField>
      </LineContainer>
      <LineContainer>
        <Button { ...picBtnProps }>
          <ButtonIcon src={ picIcon }/>
          <ImageInput onChange={ onUploadImg }></ImageInput>
          사진 업로드
        </Button>
        <Button { ...genBtnProps }>
          <ButtonIcon src={ genIcon }/>
          띠부씰 생성
        </Button>
      </LineContainer>
      <LineContainer $align="center">
        <Button  { ...downBtnProps }>
          <ButtonIcon src={ downIcon }/>
          띠부씰 저장하기
        </Button>
      </LineContainer>
    </ControlsContainer>
  );
}

export default Controller;