import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import EventDetailsCard from 'components/EventDetailsCard/EventDetailsCard';
import { CenteredCotainer } from './EventPage.styled';
import { useLocation } from 'react-router-dom';

const EventPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <GoBackBtn to={backLinkHref} />
      <CenteredCotainer>
        <PageTitle>Galery Opening</PageTitle>
        <EventDetailsCard />
      </CenteredCotainer>
    </>
  );
};

export default EventPage;
