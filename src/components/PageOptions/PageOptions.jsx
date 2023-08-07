import FilterMenu from 'components/FilterMenu/FilterMenu';
import SortMenu from 'components/SortMenu/SortMenu';
import { AddButton } from 'components/Buttons/Buttons.styled';
// import { SubmitBtn } from 'components/AddEventForm/AddEventForm.styled';
import { PlusIcon } from 'components/Buttons/Buttons.styled';
import { Wrapper } from 'utils/FlexWrapper.styled';
const PageOptions = () => {
  return (
    <Wrapper>
      <FilterMenu />
      <SortMenu />
      <AddButton>
        <PlusIcon color="white" />
        Add new event
      </AddButton>
      {/* <AddEventBtn /> */}
    </Wrapper>
  );
};

export default PageOptions;
