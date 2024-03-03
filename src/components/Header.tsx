import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 30px;
  background-color: #f00000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  color: white;
  font-family: Galmuri14;
  font-size: 15px;
  font-weight: 500;
`;

const Header = () => {
  return <HeaderView/>;
}

const HeaderView = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>띠부씰생성기</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;