import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Navbar = ({ setShowSidebar }) => {
  return (
    <Stack
      direction={'row'}
      px={2}
      py={1}
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: '0',
        background: 'white',
        zIndex: 100,
      }}
    >
      <Stack
        direction={'row'}
        sx={{
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <IconButton
          sx={{ color: '#000' }}
          onClick={() => setShowSidebar((prev) => !prev)}
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

      <Stack
        direction={'row'}
        alignItems={'center'}
        maxWidth={'720px'}
        justifyContent={'center'}
        sx={{ gap: '15px', width: '65%' }}
      >
        <SearchBar />
        <IconButton sx={{ color: '#000', background: '#e2e0e0' }}>
          <MicIcon />
        </IconButton>
      </Stack>

      <Stack
        direction={'row'}
        mr={4}
        alignItems={'center'}
        gap={2}
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <Stack direction={'row'} gap={1}>
          <IconButton sx={{ color: '#000' }}>
            <VideoCallOutlinedIcon />
          </IconButton>
          <IconButton sx={{ color: '#000' }}>
            <NotificationsOutlinedIcon />
          </IconButton>
        </Stack>

        <Avatar
          sx={{
            height: '32px',
            width: '32px',
            textTransform: 'uppercase',
            background: 'darkGreen',
            ml: '5px',
            objectFit: 'contain',
            cursor: 'pointer',
          }}
          src='https://mahammed-shoheb.netlify.app/assets/profile-9f239e79.jpg'
          alt='mahammed shoheb profile pic'
        />
      </Stack>
    </Stack>
  );
};
export default Navbar;
