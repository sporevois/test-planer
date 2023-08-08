import {
  Card,
  ImageThumb,
  Title,
  DateAndTime,
  Location,
  Text,
  Wrapper,
  TextContainer,
  StiskersContainer,
  LinkWraper,
} from './EventCard.styled';
import { HomePageSticker } from 'components/Stickers/Stickers';

const EventCard = eventData => {
  const {
    title,
    description,
    eventDate,
    time,
    location,
    category,
    priority,
    priorityColor,
  } = eventData.data;
  console.log(priorityColor);
  return (
    <Card>
      <LinkWraper to="/event">
        <ImageThumb>
          <StiskersContainer>
            <HomePageSticker text={category}></HomePageSticker>
            <HomePageSticker
              text={priority}
              textColor={priorityColor}
            ></HomePageSticker>
          </StiskersContainer>
          <Wrapper>
            <DateAndTime>
              {eventDate} at {time}
            </DateAndTime>
            <Location>{location}</Location>
          </Wrapper>
        </ImageThumb>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </TextContainer>
      </LinkWraper>
    </Card>
  );
};

export default EventCard;
