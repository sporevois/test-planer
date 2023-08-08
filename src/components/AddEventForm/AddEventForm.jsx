import {
  Form,
  FormGrid,
  Label,
  Input,
  Textarea,
  TextareaLabel,
  ChevronIcon,
} from './AddEventForm.styled';
import Select from 'components/Select/Select';
import { SubmitButton } from 'components/Buttons/Buttons.styled';
import { useState } from 'react';
import { postEvent } from 'sevices/api';
import { useNavigate } from 'react-router-dom';

const AddEventForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [priorityColor, setPriorityColor] = useState('');

  const checkPriority = value => {
    switch (value) {
      case 'High':
        return setPriorityColor('rgba(255, 43, 119, 1)');
      case 'Low':
        return setPriorityColor('rgba(107, 212, 117, 1)');
      case 'Medium':
        return setPriorityColor('rgba(226, 163, 0, 1)');
      default:
        return;
    }
  };
  const onCategoryChange = e => {
    const value = e.target.value;
    setCategory(value);
  };

  const onPriorityChange = e => {
    const value = e.target.value;
    checkPriority(value);
    setPriority(value);
  };

  const onHandleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        return setTitle(value);
      case 'description':
        return setDescription(value);
      case 'eventDate':
        return setEventDate(value);
      case 'time':
        return setTime(value);
      case 'location':
        return setLocation(value);
      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let formData = {
      title,
      description,
      eventDate,
      time,
      location,
      category,
      priority,
      priorityColor,
    };

    await postEvent(formData);
    navigate('/');
  };

  const date = new Date();
  const start = date.toISOString().slice(0, 10);
  return (
    <Form onSubmit={handleSubmit}>
      <FormGrid>
        <Label>
          Title
          <Input
            type="text"
            name="title"
            value={title}
            placeholder="Input"
            onChange={onHandleChange}
          />
        </Label>
        <TextareaLabel>
          Description
          <Textarea
            placeholder="Input"
            name="description"
            value={description}
            onChange={onHandleChange}
          />
        </TextareaLabel>
        <Label>
          Select date
          <Input
            type="date"
            lang="uk-UA"
            name="eventDate"
            value={eventDate}
            min={start}
            placeholder="Input"
            onChange={onHandleChange}
          />
        </Label>
        <Label>
          Select time
          <Input
            type="time"
            name="time"
            value={time}
            placeholder="Input"
            onChange={onHandleChange}
          />
        </Label>
        <Label>
          Location
          <Input
            type="text"
            name="location"
            value={location}
            placeholder="Input"
            onChange={onHandleChange}
          />
        </Label>
        <Label>
          Category
          <Select
            value={category}
            options={[
              { value: 'Art', label: 'Art' },
              { value: 'Vusic', label: 'Music' },
              { value: 'Business', label: 'Business' },
              { value: 'Conference', label: 'Conference' },
              { value: 'Workshop', label: 'Workshop' },
              { value: 'Party', label: 'Party' },
              { value: 'Sport', label: 'Sport' },
            ]}
            onChange={onCategoryChange}
          />
          <ChevronIcon color="rgba(123, 97, 255, 1)" />
        </Label>
        <Label>
          Add picture
          <Input disabled type="file" />
        </Label>
        <Label>
          Priority
          <Select
            options={[
              { value: '', label: 'Input' },
              { value: 'High', label: 'High' },
              { value: 'Medium', label: 'Medium' },
              { value: 'Low', label: 'Low' },
            ]}
            value={priority}
            onChange={onPriorityChange}
          />
          <ChevronIcon color="rgba(123, 97, 255, 1)" />
        </Label>
      </FormGrid>
      <SubmitButton type="submit">Add event</SubmitButton>
    </Form>
  );
};
export default AddEventForm;
