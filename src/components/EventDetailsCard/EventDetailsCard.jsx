import { DeleteButton, EditButton } from 'components/Buttons/Buttons.styled';
import {
  EventBox,
  ImageBox,
  Image,
  StickerBox,
  ButtonBox,
  Wrapper,
} from './EventDetailsCard.styled';
import { Text } from 'components/EventCard/EventCard.styled';
import { EventPageSticker } from 'components/Stickers/Stickers';
import Img from '../../images/Details_card_image.jpg';
const EventDetailsCard = cardData => {
  return (
    <EventBox>
      <ImageBox>
        <Image src={Img} />
      </ImageBox>
      <Wrapper>
        <Text>
          Discover an enchanting evening celebrating the world of art at our
          exclusive gallery opening.
        </Text>
        <StickerBox>
          <EventPageSticker text="Art" />
          <EventPageSticker text="High" textColor="red" />
          <EventPageSticker text="Kyiv" />
          <EventPageSticker text="12.07 at 12:00 am" />
        </StickerBox>
        <ButtonBox>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete event</DeleteButton>
        </ButtonBox>
      </Wrapper>
    </EventBox>
  );
};
export default EventDetailsCard;
