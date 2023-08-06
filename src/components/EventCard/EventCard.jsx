import {
  Card,
  ImageThumb,
  Title,
  DateAndTime,
  Location,
  Text,
  Wrapper,
  TextContainer,
} from './EventCard.styled';

const EventCard = () => {
  return (
    <Card>
      <ImageThumb>
        <Wrapper>
          <DateAndTime>12.07 at 12:00</DateAndTime>
          <Location>Kyiv</Location>
        </Wrapper>
      </ImageThumb>
      <TextContainer>
        <Title>Galery Opening</Title>
        <Text>
          Unlock the secrets of effective leadership at our transformative
          Success Leadership Conference.
        </Text>
      </TextContainer>
    </Card>
  );
};

export default EventCard;
