import styled from 'styled-components';
import Default from '../../images/default_event_details.svg';

export const EventBox = styled.div`
  width: 628px;
  margin-top: 14px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  background-color: rgba(255, 255, 255, 1);
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 272px;
  border-radius: 8px;
  overflow: hidden;
  background-image: url(${Default});
`;
export const Image = styled.img`
  width: 100%;
`;
export const StickerBox = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 4px 10px 40px;
`;
