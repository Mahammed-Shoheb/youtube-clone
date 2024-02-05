import { Box, Container } from '@mui/material';
import { FeedSidebar, Navbar, WatchVideoSidebar } from '../components';
import FeedShortSidebar from '../components/FeedShortSidebar';
import { Outlet } from 'react-router-dom';

import { useGlobalContext } from '../utility/context';

const HomeLayout = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  return (
    <>
      <Navbar setShowSidebar={setShowSidebar} />
      <Box
        component={'main'}
        sx={{
          display: 'flex',
        }}
      >
        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
          {showSidebar ? <FeedShortSidebar /> : <FeedSidebar />}
        </Box>
        <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
          {showSidebar ? <WatchVideoSidebar /> : <FeedShortSidebar />}
        </Box>
        <Container
          maxWidth={'lg'}
          sx={{ width: '100%', overflow: 'hidden' }}
          disableGutters
        >
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
export default HomeLayout;
