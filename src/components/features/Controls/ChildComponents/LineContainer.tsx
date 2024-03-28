import styled from "styled-components";

const LineContainer = styled.div<{ $align?: string}>`
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: ${ props => props.$align ? props.$align : 'space-between'};
  align-items: center;
`;

export default LineContainer;