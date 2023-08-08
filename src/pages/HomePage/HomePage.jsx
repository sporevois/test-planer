import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import PageOptions from 'components/PageOptions/PageOptions';
import { PageBar } from './HomePage.styled';
import EventList from 'components/EventList/EventList';

const HomePage = () => {
  return (
    <>
      <PageBar>
        <PageTitle>My events</PageTitle>
        <PageOptions />
      </PageBar>
      <EventList />
    </>
  );
};

export default HomePage;
