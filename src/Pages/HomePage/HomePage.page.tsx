import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

// Own state of store
import { AppDispatch, State } from "../../Redux/Store";
import { GetChannelsAction } from "../../Redux/GetChannels/GetChannels.actions";

// Own components
import { Column, Container, Row } from "../../Components/Grid";
import Button from "../../Components/Button/";
import LoaderUi from "../../Components/Loader";
import { Programation } from "../../Components/Programation";

// Own models
import { AlignItems, JustifyContent } from "../../Models/Column";

// Own constants
import { GET_CHANNELS_FULFILLED } from "../../Constants/GetChannels";

// Own styles
import { ContainerStyled, Modal } from "./HomePage.styles";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: State) => state.theme);
  const [channelsResponse, setChannelsResponse] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const GetChannlesDispatch = async (quantity: string) => {
    setLoading(true);
    
    const response = await dispatch(GetChannelsAction(quantity));

    if (response?.type === GET_CHANNELS_FULFILLED) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      setChannelsResponse(response?.payload?.channels);
    }
  };

  useEffect(() => {
    GetChannlesDispatch("200");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container as={ContainerStyled} $show={loading}>
        <Row>
          <Column span={12} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
            <LoaderUi/>
          </Column>
        </Row>
      </Container>
      <Container as={ContainerStyled} $show={!loading && !showModal}>
        <Row>
          <Column span={12} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
            <Button text="Mostrar EPG" onClick={() => setShowModal(true)}/>
          </Column>
        </Row>
      </Container>
      <Modal $show={showModal}>
        <Container as={ContainerStyled} $show={!loading}>
          <Row>
            <Column span={12} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
              <Programation epg={channelsResponse} closeModal={setShowModal} />
            </Column>
          </Row>
        </Container>
      </Modal>
    </ThemeProvider>
  );
};

export default HomePage;
