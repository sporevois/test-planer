import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import AddEventForm from 'components/AddEventForm/AddEventForm';
import { useLocation } from 'react-router-dom';
const AddEventPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <GoBackBtn to={backLinkHref} />
      <PageTitle>Create new event</PageTitle>
      <AddEventForm />
    </>
  );
};

export default AddEventPage;
