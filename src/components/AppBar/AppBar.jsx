import Logo from 'components/Logo/Logo';
import SearchBox from 'components/SearchBox/SearchBox';
import LangMenu from 'components/LangMenu/LangMenu';
import { Header, Wrapper } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Logo />
      <Wrapper>
        <SearchBox />
        <LangMenu />
      </Wrapper>
    </Header>
  );
};

export default AppBar;
