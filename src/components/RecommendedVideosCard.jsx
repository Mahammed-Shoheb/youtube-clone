import { Avatar, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const RecommendedVideosCard = ({ video }) => {
  const { id, snippet } = video;
  return (
    <Stack mb={2}>
      <Link
        to={`/watch?v=${id?.videoId}`}
        style={{
          textDecoration: 'none',
          color: 'black',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          height={'90px'}
          style={{ borderRadius: 10, marginBottom: '16px' }}
        />

        <Stack sx={{ gap: '5px', maxWidth: '25rem' }}>
          <Typography
            variant='subtitle2'
            component='h4'
            fontSize={{ xs: '0.75rem', sm: '0.9rem' }}
          >
            {snippet?.title}
          </Typography>

          <Stack direction={'row'} sx={{ gap: '10px', alignItems: 'center' }}>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography
              variant='caption'
              fontSize={{ xs: '0.7rem', sm: '0.75rem' }}
            >
              {snippet?.channelTitle}
            </Typography>

            <CheckCircleOutlineIcon fontSize='small' />
          </Stack>
          {/* <Typography variant='caption'>
            {views} views · Streamed {timestamp}
          </Typography> */}
        </Stack>
      </Link>
    </Stack>
  );
};
export default RecommendedVideosCard;
