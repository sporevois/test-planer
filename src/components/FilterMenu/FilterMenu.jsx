import { Menu, Select, Option, FilterIcon } from './FilterMenu.styled';

const FilterMenu = () => {
  return (
    <Menu>
      <FilterIcon color="rgba(63, 63, 63, 1)" />
      <Select id="browsers">
        <Option selected hidden>
          Category
        </Option>
        <Option>Art</Option>
        <Option>Music</Option>
        <Option>Business</Option>
        <Option>Conference</Option>
        <Option>Workshop</Option>
        <Option>Party</Option>
        <Option>Sport</Option>
      </Select>
    </Menu>
  );
};

export default FilterMenu;
