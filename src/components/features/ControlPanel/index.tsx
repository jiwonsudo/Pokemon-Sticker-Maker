import React, { useCallback, useRef } from "react";

import Button from "./Button";
import Label from "./Label";
import TextField from "./TextField";
import ButtonIcon from "./ButtonIcon";
import LineContainer from "./LineContainer";
import ControlsContainer from "./ControlsContainer";

import { ContentProps } from "components/Contents";

import picIcon from 'assets/upload.svg';
import genIcon from 'assets/sticker.svg';
import downIcon from 'assets/download.svg';
import ImageInput from "./ImageInput";

interface ControllerProps {
  picBtnProps: { [key: string]: string },
  genBtnProps: { [key: string]: string },
  downBtnProps: { [key: string]: string },
  tfId: React.RefObject<HTMLInputElement>,
  tfName: React.RefObject<HTMLInputElement>,
  onUploadImg: (event: React.FormEvent<HTMLInputElement>) => void,
  onGenerate: () => void,
  onDownloadSeal: () => void,
  picIcon: string,
  genIcon: string,
  downIcon: string,
}

const Controller = ({ getSealInfo }: ContentProps) => {
  const uploadedImgUri = useRef<string>('');

  const tfId = useRef<HTMLInputElement>(null);
  const tfName = useRef<HTMLInputElement>(null);

  const onUploadImg = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const newImageUri = input.value;
    uploadedImgUri.current = newImageUri;
  }, []);

  const onGenerate = useCallback(() => {
    let tfIdValue = tfId.current!.value;
    let tfNameValue = tfName.current!.value;

    if (!tfIdValue || tfIdValue.replaceAll(' ', '') === '') tfIdValue = '0501';
    if (!tfNameValue || tfNameValue.replaceAll(' ', '') === '') tfNameValue = '수댕이';

    getSealInfo(tfIdValue, tfNameValue, uploadedImgUri.current);
  }, [])

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
    tfId: tfId,
    tfName: tfName,
    onUploadImg: onUploadImg,
    onGenerate: onGenerate,
    onDownloadSeal: () => {},
    picIcon: picIcon,
    genIcon: genIcon,
    downIcon: downIcon,
  };

  return <ControllerView {...props} />;
};

const ControllerView = ({ picBtnProps, genBtnProps, downBtnProps, tfId, tfName, onUploadImg, onGenerate, onDownloadSeal, picIcon, genIcon, downIcon } : ControllerProps) => {
  return (
    <ControlsContainer>
      <LineContainer>
        <Label>도감번호</Label>
        <TextField ref={ tfId }></TextField>
      </LineContainer>
      <LineContainer>
        <Label>이름</Label>
        <TextField ref={ tfName }></TextField>
      </LineContainer>
      <LineContainer>
        <Button { ...picBtnProps }>
          <ButtonIcon src={ picIcon }/>
          <ImageInput onChange={ onUploadImg }></ImageInput>
          사진 업로드
        </Button>
        <Button onClick={ onGenerate } { ...genBtnProps }>
          <ButtonIcon src={ genIcon }/>
          띠부씰 생성
        </Button>
      </LineContainer>
      <LineContainer $align="center">
        <Button onClick={ onDownloadSeal } { ...downBtnProps }>
          <ButtonIcon src={ downIcon }/>
          띠부씰 저장하기
        </Button>
      </LineContainer>
    </ControlsContainer>
  );
}

export default Controller;