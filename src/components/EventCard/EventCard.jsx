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
} from './EventCard.styled';
import { HomePageSticker } from 'components/Stickers/Stickers';
import Background from '../../images/test_card_image.jpg';

const EventCard = () => {
  return (
    <Card>
      <ImageThumb style={{ backgroundImage: `url(${Background})` }}>
        <StiskersContainer>
          <HomePageSticker text="Art"></HomePageSticker>
          <HomePageSticker text="High" textColor="red"></HomePageSticker>
        </StiskersContainer>
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
