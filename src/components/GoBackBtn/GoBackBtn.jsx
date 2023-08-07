import { Button, BtnIcon } from './GoBackBtn.styled';
const GoBackBtn = ({ to }) => {
  return (
    <Button to={to}>
      <BtnIcon color="rgba(123, 97, 255, 1)" />
      Back
    </Button>
  );
};
export default GoBackBtn;
