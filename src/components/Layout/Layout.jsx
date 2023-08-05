import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import { Container } from 'utils/Container.styled';
import { Background } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Background>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </Background>
    </>
  );
};
export default Layout;
