import { Label, StyledSelect, Option } from './Select.styled';
const Select = ({ label, value, options, onChange }) => {
  return (
    <Label>
      {label}
      <StyledSelect value={value} onChange={onChange}>
        {options.map(option => (
          <Option key={option.label} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
    </Label>
  );
};
export default Select;
