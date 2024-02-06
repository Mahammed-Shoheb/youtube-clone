import { useEffect, useState } from 'react';
import { Navbar, WatchVideoSidebar } from '../components';
import { Avatar, Container, Skeleton, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player/lazy';
import { RecommendedVideosCard, ChannelCard } from '../components';
import { Link, useSearchParams } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { fetchFromAPI } from '../utility/fetchFromAPI';
import { useGlobalContext } from '../utility/Context';
import useScrollToTop from '../utility/useScrollToTop';

const VideoPage = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get('v');
  const count = new Array(6).fill(0);
  useEffect(() => {
    fetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoID}`
    ).then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(
      `search?relatedToVideoId=${videoID}&part=id%2Csnippet&type=video`
    ).then((data) => setVideos(data.items));
  }, [videoID]);

  useScrollToTop();

  if (!videoDetail) {
    return (
      <>
        <Navbar setShowidebar={setShowSidebar} />
        <WatchVideoSidebar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <Container maxWidth={'lg'}>
          <Stack
            gap={2}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
            py={2}
          >
            <Stack width={{ xs: '90vw', md: '70%' }}>
              <Skeleton width={'100%'} height={'15rem'} variant='rectangular' />
              <Skeleton width={'90%'} height={'2rem'} />
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'end'}
              >
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                  <Skeleton width={'3rem'} height={'3rem'} variant='circular' />
                  <Skeleton width={'5rem'} height={'1rem'} />
                </Stack>
                <Skeleton width={'5rem'} height={'1.5rem'} />
                <Skeleton width={'5rem'} height={'1.5rem'} />
              </Stack>
            </Stack>
            <Stack>
              {count.map((_, index) => {
                return (
                  <Stack direction={'row'} mb={2} gap={3} key={index}>
                    <Skeleton height={160} width={250} variant='rounded' />
                    <Stack gap={3}>
                      <Skeleton width={240} height={'2rem'} />

                      <Skeleton width={160} height={'1.5rem'} />
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }

  const { id, snippet, statistics } = videoDetail;

  return (
    <>
      <Navbar setShowSidebar={setShowSidebar} />
      <WatchVideoSidebar
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
      <Container maxWidth={'lg'}>
        <Stack
          gap={2}
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          py={2}
        >
          <Stack>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              muted
              playing
              controls
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
              width={'100%'}
            />

            <Typography variant='h5' fontWeight='bold' py={2}>
              {snippet?.title}
            </Typography>

            <Stack direction='row' justifyContent='space-between' py={1}>
              <Link
                to={`/${snippet?.channelId}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'black',
                  gap: '0.5rem',
                }}
              >
                <Avatar sx={{ width: 30, height: 30 }} />
                <Typography variant={'caption'}>
                  {snippet?.channelTitle}
                </Typography>
                <CheckCircleOutlineIcon
                  sx={{ fontSize: '0.8rem', color: 'gray', ml: '5px' }}
                />
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                {statistics.viewCount ? (
                  <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(statistics?.viewCount).toLocaleString()} views
                  </Typography>
                ) : (
                  <Skeleton variant='text' width={40} />
                )}
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.likeCount || 0).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Typography variant='body2' py={2}>
              {snippet?.description?.slice(0, 240)}...
            </Typography>
          </Stack>
          <Stack>
            {videos ? (
              <>
                {videos?.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.id.videoId && (
                        <RecommendedVideosCard video={item} />
                      )}
                      {item.id.channelId && (
                        <ChannelCard channelDetail={item} />
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {count.map((_, index) => {
                  return (
                    <Stack direction={'row'} mb={2} gap={3} key={index}>
                      <Skeleton height={160} width={250} variant='rounded' />
                      <Stack gap={3}>
                        <Skeleton width={240} height={'2rem'} />

                        <Skeleton width={160} height={'1.5rem'} />
                      </Stack>
                    </Stack>
                  );
                })}
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
export default VideoPage;
