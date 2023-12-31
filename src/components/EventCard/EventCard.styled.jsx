import styled from 'styled-components';
import Default from '../../images/default.svg';
import { Link } from 'react-router-dom';

export const Card = styled.li`
  box-sizing: border-box;
  list-style: none;
  overflow: hidden;
  width: 302px;
  height: 480px;
  border: none;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  background-color: rgba(255, 255, 255, 1);
  transition: 250ms;
  :hover {
    cursor: pointer;
    scale: 1.02;
  }
`;
export const LinkWraper = styled(Link)`
  text-decoration: none;
  :hover {
    cursor: pointer;
    scale: 1.02;
  }
`;

export const ImageThumb = styled.div`
  width: 100%;
  height: 336px;

  background-image: url(${Default});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const StiskersContainer = styled.div`
  display: flex;
  position: absolute;
  margin-top: 12px;
  margin-left: 12px;
`;
export const Wrapper = styled.div`
  position: relative;
  top: 296px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const DateAndTime = styled.p`
  margin: 0;
  color: rgba(123, 97, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.71;
  font-weight: 400;
`;
export const Location = styled.p`
  margin: 0;
  color: rgba(123, 97, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.71;
  font-weight: 400;
`;

export const TextContainer = styled.div`
  padding: 16px;
`;
export const Title = styled.h3`
  margin: 0;
  color: rgba(28, 27, 31, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;
export const Text = styled.p`
  margin: 16px 0 0 0;
  color: rgba(73, 69, 79, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.43;
  font-weight: 400;
`;
