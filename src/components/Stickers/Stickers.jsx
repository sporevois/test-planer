import {
  EventPageStickerBox,
  StickerText,
  HomePageStickerBox,
} from './Stickers.styled';

export const EventPageSticker = ({ text, textColor }) => {
  return (
    <EventPageStickerBox>
      <StickerText style={{ color: `${textColor}` }}>{text}</StickerText>
    </EventPageStickerBox>
  );
};

export const HomePageSticker = ({ text, textColor }) => {
  return (
    <HomePageStickerBox>
      <StickerText style={{ color: `${textColor}` }}>{text}</StickerText>
    </HomePageStickerBox>
  );
};
