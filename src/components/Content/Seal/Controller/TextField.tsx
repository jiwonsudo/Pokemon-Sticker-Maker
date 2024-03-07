import styled from "styled-components";

const TextField = styled.input`
  width: 150px;
  padding-left: 8px;
  font-size: 14px;
  background-color: #f0f0f0;
  font-family: Galmuri11;
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
`;

export default TextField;