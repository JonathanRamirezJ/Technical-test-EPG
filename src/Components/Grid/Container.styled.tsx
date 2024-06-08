import styled from "styled-components";
import mediaQuery, { Screen } from "../../Utilities/MediaQuery";
import { prop } from "styled-tools";

export const Container = styled.section<{$show:boolean}>`
  display: ${(props) => (props.$show ? "grid" : "none")};
  box-sizing: border-box;
  grid-template-rows: auto;
  padding: 0 24px;
  width: 100%;

  ${mediaQuery[Screen.mobile]} {
    min-width: 100%;
  }
`;

export const FillerContainer = styled(Container)`
  position: relative;
  min-height: calc(100vh - 65px);
  padding-bottom: 120px;
  align-items: start;
  width: 100%;
`;

export const BottomFixedContainer = styled.div<{
  bottom?: number;
}>`
  display: flex;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  bottom: ${prop("bottom", 20)}px;
  padding: 0 10px;
  gap: 5px;
  left: 0;
`;
