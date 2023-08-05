import styled from 'styled-components';
import { Plus } from 'react-swm-icon-pack';

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 193px;
  margin-left: 24px;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  background-color: #7b61ff;
  color: rgba(255, 255, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    scale: 1.05;
    transition: 250ms;
  }
`;

export const PlusIcon = styled(Plus)`
  pointer-events: none;
  margin-right: 16px;
`;
