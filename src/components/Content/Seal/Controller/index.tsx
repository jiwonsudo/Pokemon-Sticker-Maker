import styled from "styled-components";

import Button from "./Button";
import Label from "./Label";
import TextField from "./TextField";

const ControlsContainer = styled.div`
  width: 300px;
  margin-top: 40px;
`;

const LineContainer = styled.div`
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Controller = () => {
  return <ControllerView/>;
};

const ControllerView = () => {
  const viewProps = {
    picBtnProps: {
      $bgColor: '#54E50C',
      $color: '#323F2C',
      $activeBgColor: '#2e7908',
      $activeColor: '#171d14',
    },
    getBtnProps: {
      $bgColor: '#e5710c',
      $color: '#361b02',
      $activeBgColor: '#8b4507',
      $activeColor: '#090400',
    }
  };
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
        <Button { ...viewProps.picBtnProps }>사진 업로드</Button>
        <Button { ...viewProps.getBtnProps }>띠부씰 생성</Button>
      </LineContainer>
    </ControlsContainer>
  );
}

export default Controller;