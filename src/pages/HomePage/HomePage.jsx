import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import PageOptions from 'components/PageOptions/PageOptions';
import { PageBar, CardGrid } from './HomePage.styled';
import EventCard from 'components/EventCard/EventCard';
const HomePage = () => {
  return (
    <>
      <PageBar>
        <PageTitle>My events</PageTitle>
        <PageOptions />
      </PageBar>
      <CardGrid>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </CardGrid>
    </>
  );
};

export default HomePage;
