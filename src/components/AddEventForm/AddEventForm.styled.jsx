import styled from 'styled-components';
import { ChevronSmallDown } from 'react-swm-icon-pack';

export const Form = styled.form`
  box-sizing: content-box;
  width: 100%;
  margin-top: 25px;
  padding: 40px 40px 54px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  background-color: rgba(255, 255, 255, 1);
`;
export const FormGrid = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-bottom: 40px;
  column-gap: 42px;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 372px);
  grid-template-rows: repeat(3, 100px);
`;
export const Label = styled.label`
  color: rgba(123, 97, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 0.4px;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 372px;
  padding: 16px 12px;
  margin-top: 8px;
  border: 1px solid rgba(172, 167, 195, 1);
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
`;
export const TextareaLabel = styled.label`
  grid-column: 1 / span 1;
  grid-row: 2 / span 2;
  color: rgba(123, 97, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 0.4px;
`;
export const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 156px;
  margin-top: 8px;
  padding: 16px 12px;
  resize: none;
  border: 1px solid rgba(172, 167, 195, 1);
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  :focus {
    outline: 2px solid rgba(123, 97, 255, 1);
  }
`;
export const Select = styled.select`
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
export const Option = styled.option``;

export const ChevronIcon = styled(ChevronSmallDown)`
  pointer-events: none;
  position: relative;
  left: 335px;
  bottom: 41px;
`;
