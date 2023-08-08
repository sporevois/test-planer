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
import Background from '../../images/test_card_image.jpg';

const EventCard = data => {
  // { title,description, eventDate, time, location,category,priority,priorityColor} = data
  return (
    <Card>
      <LinkWraper to="/event">
        <ImageThumb style={{ backgroundImage: `url(${Background})` }}>
          <StiskersContainer>
            <HomePageSticker
              text="Art"
              // text={categoty}
            ></HomePageSticker>
            <HomePageSticker
              text="High"
              // text={priority}
              textColor="red"
              // textColor={priorityColor}
            ></HomePageSticker>
          </StiskersContainer>
          <Wrapper>
            <DateAndTime>12.07 at 12:00</DateAndTime>
            {/* <DateAndTime>{eventDate} at {time}</DateAndTime> */}
            <Location>Kyiv</Location>
            {/* <Location>{location}</Location> */}
          </Wrapper>
        </ImageThumb>
        <TextContainer>
          <Title>Galery Opening</Title>
          {/* <Title>{ title}</Title> */}
          <Text>
            Unlock the secrets of effective leadership at our transformative
            Success Leadership Conference.
          </Text>
          {/* <Text>{description}</Text> */}
        </TextContainer>
      </LinkWraper>
    </Card>
  );
};

export default EventCard;
