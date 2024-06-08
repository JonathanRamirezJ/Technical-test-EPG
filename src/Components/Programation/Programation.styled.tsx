import styled from "styled-components";
import { theme } from "styled-tools";
import mediaQuery, { Screen } from "../../Utilities/MediaQuery";
import { sizeForHour } from "../../Utilities/Sizes";

export const ContainerStyled = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
`;

export const tableProgramation = styled.div`
  background-color: ${theme("Primary_black")};
  color: ${theme("Primary_white")};
  height: 60vh;
  overflow-y: auto;
`;

export const ChannelRow = styled.div`
  background-color: ${theme("Primary_05")};
  border: 5px solid ${theme("Primary_black")};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100px;
  width: 100%;

  img {
    width: 100%;
  }

  ${mediaQuery[Screen.mobile]} {
    img {
      height: 50px;
      width: 50px;
    }
  }

  ${mediaQuery[Screen.lg]} {
    img {
      height: 60px;
      width: 60px;
    }
  }

  ${mediaQuery[Screen.xxl]} {
    img {
      height: 60px;
      width: 60px;
    }
  }
`;

export const OverflowContent = styled.div`
  white-space: nowrap;
  overflow-x: visible;
  overflow-y: hidden;
  width: 100%;

  div {
    display: flex;
  }
`;

export const EventsRow = styled.div<{$hour:number}>`
  background-color: ${theme("Primary_05")};
  border: 1px solid ${theme("Content_UX_02")};
  box-sizing: border-box;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  padding: 5px 24.5px;
  height: 100px;
  width: ${(props) => (props.$hour ? sizeForHour(props.$hour) : "200px")};
  
  h4, p, span {
    margin: 4px 0;
    display: block;
  }

  h4 {
    text-overflow: clip;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  p {
    font-size: 12px;
  }

  span {
    display: inline-block;
    text-align: end;
    margin: 0;
    width: 100%;
  }
`;

export const RowContentData = styled.div<{$show:boolean}>`
  box-sizing: border-box;
  color: ${theme("Primary_white")};
  height: 40vh;
  display: ${(props) => (props.$show ? "grid" : "none")};
  position: relative;
`;

export const Cover = styled.div<{$bgImage:string}>`
  background: ${(props) => `url(${props.$bgImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: absolute;
  height: 40vh;
  top: 0%;
  opacity: 0.1;
  width: 100%;
  z-index: 1;
`;

export const CloseButton = styled.div`
  color: ${theme("Primary_white")};
  cursor: pointer;
  z-index: 9;
`;

export const ContentData = styled.div`
  background-color: ${theme("Primary_black")};
  height: 40vh;
  width: 100%;
`;

export const TitleChannels = styled.div`
  text-align: center;

  h5 {
    margin: 5px 0;
    font-weight: 600;
  }
`;

export const HourBar = styled.div`
  display: flex;
  text-align: left;

  h6 {
    margin: 5px 0;
    font-weight: 600;
    width: 100px;
  }
`;

export const HourBarDiv = styled.div``;

