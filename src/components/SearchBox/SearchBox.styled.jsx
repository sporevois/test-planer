import styled from 'styled-components';

export const SearchBtn = styled.button`
  height: 24px;
  width: 24px;
  margin-left: 12px;
  padding: 0;
  border: none;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 85%;
  margin-left: 12px;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  :focus {
    outline: 2px solid rgba(123, 97, 255, 1);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 410px;
  height: 48px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
`;
