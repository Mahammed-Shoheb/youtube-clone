import { Avatar, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SearchVideoCard = ({ video }) => {
  const { id, snippet } = video;
  return (
    <Stack
      sx={{ background: 'white', width: { xs: '100%', sm: '70%' } }}
      mb={2}
    >
      <Link
        to={`/watch?v=${id?.videoId}`}
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '1rem',
            padding: '1rem',
          }}
        >
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt={snippet?.title}
            // height={'160px'}
            width={'50%'}
            style={{ borderRadius: 10 }}
          />
          <Stack sx={{ gap: '16px', maxWidth: '25rem' }}>
            <Stack>
              <Typography
                variant='subtitle1'
                component='h4'
                fontSize={{ xs: '0.75rem', sm: '1rem' }}
              >
                {snippet?.title.slice(0, 60)}
              </Typography>
              {/* <Typography variant='caption'>
              {views} views · Streamed {timestamp}
            </Typography> */}
            </Stack>
            <Stack direction={'row'} sx={{ gap: '10px', alignItems: 'center' }}>
              <Avatar
                alt={snippet?.channelTitle}
                sx={{ width: 30, height: 30 }}
              />
              <Typography
                variant='caption'
                fontSize={{ xs: '0.7rem', sm: '0.75rem' }}
              >
                {snippet?.channelTitle}
              </Typography>
              <CheckCircleOutlineIcon sx={{ fontSize: '0.8rem' }} />
            </Stack>
            <Typography
              variant='caption'
              fontSize={{ xs: '0.7rem', sm: '0.75rem' }}
            >
              {snippet?.description.slice(0, 60)}...
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Stack>
  );
};
export default SearchVideoCard;
