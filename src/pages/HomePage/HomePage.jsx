import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import PageOptions from 'components/PageOptions/PageOptions';
import { PageBar } from './HomePage.styled';
const Home = () => {
  return (
    <PageBar>
      <PageTitle>My events</PageTitle>
      <PageOptions />
    </PageBar>
  );
};

export default Home;
