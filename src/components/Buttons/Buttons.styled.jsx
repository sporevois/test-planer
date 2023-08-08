import styled from 'styled-components';
import { Plus } from 'react-swm-icon-pack';
import { Link } from 'react-router-dom';

export const AddButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  margin-left: auto;
  padding: 16px 12px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  background-color: rgba(123, 97, 255, 1);
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  transition: 250ms;

  &:hover {
    cursor: pointer;
    background-color: rgba(98, 67, 255, 1);
  }
  &: focus {
    outline: none;
    background-color: rgba(98, 67, 255, 1);
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  margin-left: auto;
  padding: 16px 12px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  background-color: rgba(123, 97, 255, 1);
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  transition: 250ms;

  &:hover {
    cursor: pointer;
    background-color: rgba(98, 67, 255, 1);
  }
  &: focus {
    outline: none;
    background-color: rgba(98, 67, 255, 1);
  }
`;

export const DeleteButton = styled.button`
  margin-left: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  background-color: rgba(123, 97, 255, 1);
  color: rgba(255, 255, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
  transition: 250ms;

  &:hover {
    cursor: pointer;
    background-color: rgba(98, 67, 255, 1);
  }
  &: focus {
    outline: none;
    background-color: rgba(98, 67, 255, 1);
  }
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  border: none;
  outline: 1px solid rgba(123, 97, 255, 1);
  border-radius: 4px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  background-color: rgba(255, 255, 255, 1);
  color: rgba(123, 97, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
  transition: 250ms;

  &:hover {
    cursor: pointer;
    background-color: rgba(123, 97, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
  &: focus {
    outline: none;
    background-color: rgba(98, 67, 255, 1);
  }
`;

export const PlusIcon = styled(Plus)`
  pointer-events: none;
  margin-right: 16px;
`;
