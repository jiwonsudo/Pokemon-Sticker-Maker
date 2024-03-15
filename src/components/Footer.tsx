import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  height: 30px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.div`
  color: #aaaaaa;
  font-family: Pretendard;
  font-size: 10px;
`

const Footer = () => {
  return <FooterView/>;
}

const FooterView = () => {
  return (
    <FooterContainer>
      <FooterText>ⓒ 2024. Jiwon Jeong all rights reserved. Inspired by codingapple.</FooterText>
    </FooterContainer>
  );
}

export default Footer;