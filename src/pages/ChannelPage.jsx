import { Box, Skeleton, Stack, Typography, Avatar } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { FeedVideos } from '../components';
import { fetchFromAPI } from '../utility/fetchFromAPI';
import { useState, useEffect } from 'react';

const ChannelPage = () => {
  const [videos, setVideos] = useState(null);
  const [channelDetail, setChannelDetail] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    fetchFromAPI(
      `channels?part=snippet%2Cstatistics&id=${pathname.slice(1)}`
    ).then((data) => setChannelDetail(data.items[0]));

    fetchFromAPI(
      `search?channelId=${pathname.slice(1)}&part=snippet%2Cid&order=date&`
    ).then((data) => setVideos(data.items));
  }, [pathname]);

  // if (!snippet || !videos) return <h1>loadding....</h1>;
  if (!channelDetail) {
    return (
      <Box px={3} py={1}>
        <Skeleton width={'100%'} height={'10rem'} variant='rounded' />
        <Stack
          direction={'row'}
          mb={2}
          py={1}
          sx={{
            borderBottom: '1px solid black',
            width: 'auto',
            gap: 4,
          }}
        >
          <Skeleton variant='circular' width={'10rem'} height={'10rem'} />
          <Stack sx={{ gap: 5, maxWidth: '25rem' }}>
            <Skeleton width={'15rem'} height={'2rem'} />
            <Skeleton width={'10rem'} height={'1rem'} />
            <Stack direction={'row'} gap={2}>
              <Skeleton width={'4rem'} />
              <Skeleton width={'4rem'} />
            </Stack>
          </Stack>
        </Stack>
        <FeedVideos videos={videos} />
      </Box>
    );
  }
  const { snippet, statistics } = channelDetail;

  return (
    <Box px={3} py={1}>
      <Box maxWidth={'lg'} sx={{ overflow: 'hidden' }}>
        <div
          style={{
            width: '100%',
            background:
              'linear-gradient(135deg, #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%)',
            height: '10rem',
            borderRadius: 10,
            marginBottom: '1rem',
          }}
        ></div>
        <Stack
          direction={'row'}
          mb={2}
          py={1}
          sx={{
            borderBottom: '1px solid black',
            width: 'auto',
            gap: 4,
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

          <Stack sx={{ gap: 2, maxWidth: '25rem' }}>
            <Stack direction={'row'} sx={{ gap: 1, alignItems: 'center' }}>
              <Typography
                variant='h4'
                fontWeight={'bold'}
                fontSize={{ xs: '1.5rem', sm: '2rem' }}
              >
                {snippet?.title}
              </Typography>

              <CheckCircleOutlineIcon sx={{ fontSize: '15px' }} />
            </Stack>
            <Typography variant='body2'>
              {snippet?.customUrl} ·{' '}
              {parseInt(statistics?.subscriberCount).toLocaleString('en-US')}{' '}
              Subscribers · {parseInt(statistics?.videoCount).toLocaleString()}{' '}
              Videos
            </Typography>

            <Typography variant='body2'>{snippet?.discription}</Typography>
            <Stack direction={'row'} alignItems={'center'} gap={1}>
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
              <Typography
                sx={{ background: '#606060', borderRadius: 20, px: 2, py: 1 }}
              >
                Join
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <FeedVideos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelPage;
