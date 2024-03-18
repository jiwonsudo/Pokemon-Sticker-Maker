import styled from "styled-components";

import Button from "./Button";
import Label from "./Label";
import TextField from "./TextField";

const ControlsContainer = styled.div`
  width: 300px;
  margin-top: 40px;
`;

const LineContainer = styled.div<{ $align?: string}>`
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: ${ props => props.$align ? props.$align : 'space-between'};
  align-items: center;
`;

interface ControllerProps {
  picBtnProps: { [key: string]: string },
  genBtnProps: { [key: string]: string },
  downBtnProps: { [key: string]: string },
}

const Controller = () => {

  const props: ControllerProps = {
    picBtnProps: {
      $bgColor: '#54E50C',
      $color: '#323F2C',
      $activeBgColor: '#2e7908',
      $activeColor: '#171d14',
    },
    genBtnProps: {
      $bgColor: '#e5710c',
      $color: '#361b02',
      $activeBgColor: '#8b4507',
      $activeColor: '#090400',
    },
    downBtnProps: {
      $bgColor: '#0c66e5',
      $color: '#03214b',
      $activeBgColor: '#063e8b',
      $activeColor: '#01070f',
    },
  };

  return <ControllerView {...props} />;
};

const ControllerView = ({ picBtnProps, genBtnProps, downBtnProps } : ControllerProps) => {
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
        <Button { ...picBtnProps }>사진 업로드</Button>
        <Button { ...genBtnProps }>띠부씰 생성</Button>
      </LineContainer>
      <LineContainer $align="center">
        <Button  { ...downBtnProps }>
          띠부씰 저장하기
        </Button>
      </LineContainer>
    </ControlsContainer>
  );
}

export default Controller;