import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100vh;
  padding: 0;
`;

export const Modal = styled.div<{$show:boolean}>`
  display: ${(props) => (props.$show ? "grid" : "none")};
  position: absolute;
  top: 0;
`;