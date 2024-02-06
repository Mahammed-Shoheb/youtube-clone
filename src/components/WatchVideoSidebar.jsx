import FeedSidebar from './FeedSidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Stack, Slide, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../utility/Context';

const WatchVideoSidebar = () => {
  const { setShowSidebar, showSidebar } = useGlobalContext();
  return (
    <Slide direction='right' in={showSidebar} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 101,
          overflow: 'hidden',
          transition: 'background 0.5s linear',
        }}
        onClick={() => setShowSidebar(false)}
      >
        <Box>
          <Stack
            direction={'row'}
            sx={{
              alignItems: 'center',
              gap: '15px',
              background: 'white',
              width: '240px',
              height: '58px',
              zIndex: 1000,
            }}
            px={2}
            py={1}
          >
            <IconButton
              sx={{ color: '#000' }}
              onClick={() => setShowSidebar(false)}
            >
              <MenuIcon />
            </IconButton>
            <Link to='/' style={{ display: 'grid', placeItems: 'center' }}>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                alt='youtube logo'
                height={20}
                title='YouTube Home'
              />
            </Link>
          </Stack>
          <Collapse in={showSidebar} timeout='auto' unmountOnExit>
            <FeedSidebar />
          </Collapse>
        </Box>
      </Box>
    </Slide>
  );
};

export default WatchVideoSidebar;
