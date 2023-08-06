import { StickerBox, StickerText, StiskersContainer } from './Sticker.styled';
const Sticker = ({ text, color }) => {
  return (
    <StiskersContainer>
      <StickerBox>
        <StickerText>Art</StickerText>
      </StickerBox>
      <StickerBox>
        <StickerText style={{ color: 'red' }}>High</StickerText>
      </StickerBox>
    </StiskersContainer>
  );
};
export default Sticker;
