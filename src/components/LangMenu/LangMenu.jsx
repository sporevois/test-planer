import { Menu, Select, Chevron } from './LangMenu.styled';

const LangMenu = () => {
  return (
    <Menu>
      <Chevron color="rgba(63, 63, 63, 1)" />
      <Select>
        <option lang="en" value="english">
          EN
        </option>
        <option lang="ua" value="ukrainian" selected>
          UA
        </option>
      </Select>
    </Menu>
  );
};

export default LangMenu;
