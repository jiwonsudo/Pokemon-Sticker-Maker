import styled from "styled-components";

interface ButtonProps {
  $bgColor?: string,
  $color?: string,
  $activeBgColor?: string,
  $activeColor?: string,
}

const Button = styled.button<ButtonProps>`
  height: 30px;
  padding: 15px;
  line-height: 0;
  font-size: 12px;
  font-family: Galmuri11;
  border: none;
  color: ${ props => props.$color ? props.$color : '#222224' };
  background-color: ${ props => props.$bgColor ? props.$bgColor : '#f0f0f0' };
  clip-path: polygon(
    0px calc(100% - 6px),
    3px calc(100% - 6px),
    3px calc(100% - 3px),
    6px calc(100% - 3px),
    6px 100%,
    calc(100% - 6px) 100%,
    calc(100% - 6px) calc(100% - 3px),
    calc(100% - 3px) calc(100% - 3px),
    calc(100% - 3px) calc(100% - 6px),
    100% calc(100% - 6px),
    100% 6px,
    calc(100% - 3px) 6px,
    calc(100% - 3px) 3px,
    calc(100% - 6px) 3px,
    calc(100% - 6px) 0px,
    6px 0px,
    6px 3px,
    3px 3px,
    3px 6px,
    0px 6px
  );

  &:active {
    background-color: #b0b0b0;
    color: #eaeaf8;
  }
`;

export default Button;