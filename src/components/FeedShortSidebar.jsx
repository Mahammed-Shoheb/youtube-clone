import { Stack } from '@mui/material';
import { sidebarDetails } from '../utility/constant';
import { Link } from 'react-router-dom';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

const FeedShortSidebar = () => {
  return (
    <Stack
      sx={{
        background: 'white',
        position: 'sticky',
        top: '58px',
        height: `calc(100vh - 58px)  `,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      {sidebarDetails.map((item, index) => {
        const { href, name, icon } = item;
        return (
          <Link
            to={href}
            key={index}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <button
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '13px 5px',
                alignItems: 'center',
                width: '100%',
                border: 'none',
                borderRadius: 10,
                cursor: 'pointer',
                gap: '5px',
                background: 'none',
              }}
            >
              <span
                style={{
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                {icon}
              </span>{' '}
              <span style={{ fontSize: '10px', textTransform: 'capitalize' }}>
                {name}
              </span>
            </button>
          </Link>
        );
      })}
      <Link to={'#'} style={{ textDecoration: 'none', color: 'black' }}>
        <button
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '13px 5px',
            alignItems: 'center',
            width: '100%',
            border: 'none',
            borderRadius: 10,
            cursor: 'pointer',
            gap: '5px',
            background: 'none',
          }}
        >
          <span
            style={{
              display: 'grid',
              placeItems: 'center',
            }}
          >
            {<VideoLibraryOutlinedIcon />}
          </span>{' '}
          <span style={{ fontSize: '10px', textTransform: 'capitalize' }}>
            you
          </span>
        </button>
      </Link>
    </Stack>
  );
};
export default FeedShortSidebar;
