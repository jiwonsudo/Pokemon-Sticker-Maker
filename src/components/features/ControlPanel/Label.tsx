import styled from "styled-components";

const Label = styled.div`
  padding: 15px;
  line-height: 0;
  font-size: 14px;
  font-family: Galmuri11;
  display: inline-block;
  border: none;
  color: #222224;
  background-color: #f0f0f0;
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

export default Label;