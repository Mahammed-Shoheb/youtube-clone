import { Avatar, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FeedVideoCard = ({ video }) => {
  const { id, snippet } = video;
  return (
    <Stack mb={2}>
      <Link
        to={`/watch?v=${id.videoId}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          style={{
            borderRadius: 10,
            marginBottom: '10px',
            width: '100%',
          }}
        />

        <Stack direction={'row'} sx={{ gap: '10px' }}>
          <Avatar alt={snippet?.channelTitle} sx={{ width: 30, height: 30 }} />
          <Stack>
            <Typography
              variant='subtitle2'
              component='h4'
              fontSize={{ xs: '0.75rem', sm: '0.9rem' }}
            >
              {snippet?.title.slice(0, 60)}
            </Typography>

            <Stack direction={'row'} sx={{ gap: '5px', alignItems: 'center' }}>
              <Typography
                variant='caption'
                fontSize={{ xs: '0.75rem', sm: '0.9rem' }}
              >
                {snippet?.channelTitle}
              </Typography>

              <CheckCircleOutlineIcon sx={{ fontSize: '0.8rem' }} />
            </Stack>
            {/* <Stack>
              <Typography
                variant='caption'
                sx={{
                  fontSize: {
                    xs: '0.8rem',
                    xl: '0.5rem',
                  },
                }}
              >
                {parseInt(viewCount).toLocaleString()} views · Streamed{' '}
                {parseInt(timestamp)}
              </Typography>
            </Stack> */}
          </Stack>
        </Stack>
      </Link>
    </Stack>
  );
};
export default FeedVideoCard;
