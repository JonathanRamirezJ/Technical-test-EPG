import { useTranslation } from "react-i18next";

// Own models
import { JustifyContent } from "../../Models/Column";

// Own utils 
import { HoursArray, TransformHourToNumber } from "../../Utilities/Hour";

// Own Components
import { Column, Container, Row } from "../Grid";

// Own styles
import {
  ChannelRow,
  ContainerStyled,
  OverflowContent,
  EventsRow,
  tableProgramation,
  RowContentData,
  CloseButton,
  ContentData,
  Cover,
  TitleChannels,
  HourBar,
  HourBarDiv,
} from "./Programation.styled";
import { useState } from "react";

const Programation = (props:any) => {
  const imageDefault = "https://fastly.picsum.photos/id/524/1500/1080.jpg?hmac=ShPhZXf8CHYgw5tjcksItNrwEskJOxcVwjX3x5nIKBY";
  const [t] = useTranslation("global");
  const [showcontentData, setShowcontentData] = useState<boolean>(false);
  const [nameEvent, setNameEvent] = useState<string>("");
  const [dateBeginEvent, setDateBeginEvent] = useState<string>("");
  const [dateEndevent, setDateEndevent] = useState<string>("");
  const [descriptionEvent, setDescriptionEvent] = useState<string>("");
  const [imageEvent, setImageEvent] = useState<string>("");
  const { epg, closeModal } = props;

  const handlePreviewData = (eventoData:any) => {
    const {
      name,
      date_begin,
      date_end,
      description,
      image_base_horizontal
    } = eventoData;
    setShowcontentData(true);

    // Set Values
    setNameEvent(name);
    setDateBeginEvent(date_begin);
    setDateEndevent(date_end);
    setDescriptionEvent(description);
    setImageEvent(image_base_horizontal);
  }

  return(
    <Container as={ContainerStyled} $show>
      <Row as={ContentData}>
        <Column span={10} xs={10}>
          <RowContentData as={Row} $show={showcontentData}>
            <Cover $bgImage={imageEvent !== "" ? imageEvent : imageDefault}/>
            <Column span={6} xs={10} pt={2} px={2}>
              <h1>{nameEvent === "NA" ? t("texts.notFoundTitle") : nameEvent}</h1>
              <p>{dateBeginEvent} a {dateEndevent}</p>
              <p>{descriptionEvent === null ? t("texts.notFoundDescription") : descriptionEvent}</p>
            </Column>
          </RowContentData>
        </Column>
        <Column span={2} xs={2} justifyContent={JustifyContent.flexEnd} pt={2} px={2}>
          <CloseButton onClick={() => closeModal(false)}>
            <h1>X</h1>
          </CloseButton>
        </Column>
      </Row>
      <Row as={tableProgramation}>
        <Column span={12}>
          <Row>
            <Column span={2} xs={6} sm={6} md={4} lg={4}>
              <TitleChannels>
                <h5>Hoy</h5>
              </TitleChannels>
              { epg.map((channel:any) => {
                return (
                  <Row as={ChannelRow} key={channel.id}>
                    <Column span={6}>
                      <h4>{channel.name}</h4>
                    </Column>
                    <Column span={6} justifyContent={JustifyContent.flexEnd}>
                      <img src={channel.image} alt="canal_logo" />
                    </Column>
                  </Row>
                )
              })}
            </Column>
            <Column span={10} xs={6} sm={6} md={8} lg={8}>
              <OverflowContent>
                <HourBar>
                  { HoursArray.map((hour:any, index:number) => {
                    return (
                      <HourBarDiv key={index}>
                        <h6>{hour.hour}</h6>
                      </HourBarDiv>
                    )
                  })}
                </HourBar>
                { epg.map((channel:any) => {
                  return (
                    <Row key={channel.id}>
                      { channel.events.map((evento:any, index:number) => {
                        return (
                          <EventsRow
                            key={index}
                            $hour={TransformHourToNumber(evento.duration)}
                            onMouseEnter={() => handlePreviewData(evento)}>
                              <h4>{evento.name === "NA" ? t("texts.notFoundTitle") : evento.name }</h4>
                              <p>{evento.duration}</p>
                              <span>...</span>
                          </EventsRow>
                        )
                      })}
                    </Row>
                  )
                })}
              </OverflowContent>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  )
};

export default Programation;