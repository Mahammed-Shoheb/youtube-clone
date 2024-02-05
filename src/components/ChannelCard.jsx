import { Avatar, Stack, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ChannelCard = ({ channelDetail }) => {
  const { id, snippet } = channelDetail;

  return (
    <Stack
      mb={2}
      sx={{ borderBottom: '1px solid black', width: { xs: '100%', sm: '70%' } }}
    >
      <Link
        to={`/${id?.channelId}`}
        style={{
          textDecoration: 'none',
          color: 'black',
          display: 'flex',
          padding: '1rem',
          alignItems: 'center',
          background: 'white',
          gap: '16px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: '50%',
          }}
        >
          <Avatar
            src={snippet?.thumbnails?.medium?.url}
            alt={snippet?.title}
            sx={{
              width: { xs: '5rem', sm: '10rem' },
              height: { xs: '5rem', sm: '10rem' },
            }}
          />
        </Box>
        <Stack direction={'row'} alignItems={'center'} gap={1}>
          <Stack sx={{ maxWidth: '25rem', gap: '1rem' }}>
            <Stack direction={'row'} sx={{ gap: '10px', alignItems: 'center' }}>
              <Typography
                variant='h6'
                fontSize={{ xs: '0.75rem', sm: '1.25rem' }}
              >
                {snippet?.title}
              </Typography>

              <CheckCircleOutlineIcon sx={{ fontSize: '15px' }} />
            </Stack>
            {/* <Typography variant='caption'>
            {channelId} · {subs} Subscribers
          </Typography> */}
            <Typography
              variant='caption'
              fontSize={{ xs: '0.7rem', sm: '0.75rem' }}
            >
              {snippet?.description}
            </Typography>
          </Stack>
          <div>
            <button
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: 20,
                background: 'black',
                color: 'white',
              }}
            >
              Subscribe
            </button>
          </div>
        </Stack>
      </Link>
    </Stack>
  );
};
export default ChannelCard;
