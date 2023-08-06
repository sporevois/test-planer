import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import AddEventForm from 'components/AddEventForm/AddEventForm';
const AddEventPage = () => {
  return (
    <>
      <GoBackBtn />
      <PageTitle>Create new event</PageTitle>
      <AddEventForm />
    </>
  );
};

export default AddEventPage;
