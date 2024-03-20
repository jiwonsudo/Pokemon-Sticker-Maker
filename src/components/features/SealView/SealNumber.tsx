import styled from "styled-components";

const SealNumber = styled.div<{ $bgColor?: string }>`
  height: 30px;
  margin-right: 5px;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  background-color: ${props => props.$bgColor ? props.$bgColor : 'yellow'};
  border-radius: 30px;
`;

export default SealNumber;