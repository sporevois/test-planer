import styled from 'styled-components';
import BackgroundImg from '../../images/background.png';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
