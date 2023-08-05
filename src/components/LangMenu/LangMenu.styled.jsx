import styled from 'styled-components';
import { ChevronSmallDown } from 'react-swm-icon-pack';

export const Menu = styled.form`
  position: relative;
  margin-left: 24px;
  width: 69px;
  background-color: rgba(255, 255, 255, 1);
`;

export const Select = styled.select`
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 12px;
  box-sizing: border-box;
  margin: 0;
  border: none;
  border-radius: 10px;
  background: transparent;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  color: rgba(63, 63, 63, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const Chevron = styled(ChevronSmallDown)`
  position: absolute;
  right: 7px;
  top: 12px;
`;
