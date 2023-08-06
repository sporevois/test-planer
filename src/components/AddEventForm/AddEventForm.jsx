import {
  Form,
  FormGrid,
  Label,
  Input,
  Select,
  Textarea,
  TextareaLabel,
  SubmitBtn,
  ChevronIcon,
} from './AddEventForm.styled';

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
      <SubmitBtn>Add event</SubmitBtn>
    </Form>
  );
};
export default AddEventForm;
