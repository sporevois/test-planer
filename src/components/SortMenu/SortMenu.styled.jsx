import styled from 'styled-components';
import { Filters2 } from 'react-swm-icon-pack';

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  appearance: none;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  color: rgba(63, 63, 63, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: #7b61ff;
    transition: 250ms;
  }
  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  padding: 24px 8px 0px;
  color: rgba(172, 167, 195, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
`;

export const FilterIcon = styled(Filters2)`
  z-index: 999;
  pointer-events: none;
  position: relative;
  left: 118px;
`;
