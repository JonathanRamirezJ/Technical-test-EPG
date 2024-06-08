import { useSelector } from "react-redux";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useTranslation } from "react-i18next";

// own states
import { State } from "../../Redux/Store";

// Own styles
import { ThemeProvider } from "styled-components";
import { ContainerStyled } from "./ErrorPage.styled";

// Own comoponents
import { Container, Column, Row } from "../../Components/Grid";
import Button from "../../Components/Button";

// Own models
import { AlignItems, JustifyContent } from "../../Models/Column";

export default function ErrorPage() {
  const [t] = useTranslation("global");
  const theme = useSelector((state: State) => state.theme);
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <ThemeProvider theme={theme}>
      <Container as={ContainerStyled}>
        <Row>
          <Column span={12} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
            <h1 className="TextAlignCenter">{t("404.title")}</h1>
          </Column>
          <Column span={12} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
            <h3 className="TextAlignCenter">{t("404.subtitle")}</h3>
          </Column>
          <Column span={12} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
            <span>{errorMessage}</span>
          </Column>
          <Column span={12} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
            <Button text={t("404.button")} onClick={() => window.location.href = "/"}/>
          </Column>
        </Row>
      </Container>
    </ThemeProvider>
  );
}
