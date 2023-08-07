import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import EventDetailsCard from 'components/EventDetailsCard/EventDetailsCard';
import { CenteredCotainer } from './EventPage.styled';
const EventPage = () => {
  return (
    <>
      <GoBackBtn />
      <CenteredCotainer>
        <PageTitle>Galery Opening</PageTitle>
        <EventDetailsCard />
      </CenteredCotainer>
    </>
  );
};

export default EventPage;
