import styled from 'styled-components';

export const Label = styled.label`
  color: rgba(123, 97, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 0.4px;
`;
export const StyledSelect = styled.select`
  appearance: none;
  box-sizing: border-box;
  width: 100%;
  margin-top: 8px;
  padding: 16px 12px;
  border-radius: 8px;
  border-color: rgba(172, 167, 195, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
  :focus {
    outline: 2px solid rgba(123, 97, 255, 1);
  }
`;
export const Option = styled.option`
  border-bottom: 1px solid black;
`;
