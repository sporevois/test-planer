import styled from 'styled-components';
import { ArrowLeft } from 'react-swm-icon-pack';

export const Button = styled.button`
  display: flex;
  margin: 0 0 17px 0;
  padding: 5px;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: transparent;
  color: rgba(123, 97, 255, 1);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    border: 1px solid rgba(123, 97, 255, 1);
    transition: 250ms;
  }
  &:focus {
    outline: 2px solid rgba(123, 97, 255, 1);
  }
`;

export const BtnIcon = styled(ArrowLeft)`
  margin-right: 8px;
`;
