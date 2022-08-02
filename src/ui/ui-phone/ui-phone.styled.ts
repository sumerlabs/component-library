import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  &.error {
    .hint {
      color: #F93C00;
    }
  }
  .selector {
    min-width: 120px;
  }
  .input {
    flex: 1;
  }
  .hint {
    width: 100%;
    color: #646464;
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
  }
`;
