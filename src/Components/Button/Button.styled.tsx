import styled from "styled-components";
import { theme } from "styled-tools";

export const ButtonStyled = styled.button`
  background-color: ${theme("Primary_01")};
  border: 1px solid transparent;
  border-radius: 15px;
  cursor: pointer;
  color: ${theme("Primary_white")};
  padding: 12px 16px;
  min-width: 200px;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 0.95;
  }
`;