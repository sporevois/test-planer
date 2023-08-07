import {
  Form,
  FormGrid,
  Label,
  Input,
  Select,
  Textarea,
  TextareaLabel,
  ChevronIcon,
} from './AddEventForm.styled';
import { AddButton } from 'components/Buttons/Buttons.styled';

const AddEventForm = () => {
  return (
    <Form>
      <FormGrid>
        <Label>
          Title
          <Input />
        </Label>
        <TextareaLabel>
          Description
          <Textarea />
        </TextareaLabel>
        <Label>
          Select date
          <Select></Select>
          <ChevronIcon color="rgba(123, 97, 255, 1)" />
        </Label>
        <Label>
          Select time
          <Select />
          <ChevronIcon color="rgba(123, 97, 255, 1)" />
        </Label>
        <Label>
          Location
          <Input />
        </Label>
        <Label>
          Category
          <Select />
          <ChevronIcon color="rgba(123, 97, 255, 1)" />
        </Label>
        <Label>
          Add picture
          <Input disabled type="file" />
        </Label>
        <Label>
          Priority
          <Select />
          <ChevronIcon color="rgba(123, 97, 255, 1)" />
        </Label>
      </FormGrid>
      <AddButton>Add event</AddButton>
    </Form>
  );
};
export default AddEventForm;
