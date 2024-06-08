import { css } from "styled-components";
import { tColumn } from "../../../Models/Column";
import { Screen } from "../../../Utilities/MediaQuery";

export const setVisibility = (screen?: Screen) => (props: tColumn) => {
  function isHidden() {
    switch (screen) {
      case Screen.xs:
        return props.hiddenXs;
      case Screen.sm:
        return props.hiddenSm;
      case Screen.md:
        return props.hiddenMd;
      case Screen.lg:
        return props.hiddenLg;
      case Screen.xl:
        return props.hiddenXl;
      case Screen.xxl:
        return props.hiddenXxl;
      case Screen.mobile:
        return props.hiddenMobile;
      case Screen.desktop:
        return props.hiddenDesktop;
      default:
        return false;
    }
  }

  const visibility = isHidden() ? "none" : "";

  return css`
    display: ${visibility};
  `;
};
