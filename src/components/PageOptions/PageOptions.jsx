import FilterMenu from 'components/FilterMenu/FilterMenu';
import SortMenu from 'components/SortMenu/SortMenu';
import AddEventBtn from 'components/AddEventBtn/AddEventBtn';
import { Wrapper } from 'utils/FlexWrapper.styled';
const PageOptions = () => {
  return (
    <Wrapper>
      <FilterMenu />
      <SortMenu />
      <AddEventBtn />
    </Wrapper>
  );
};

export default PageOptions;
