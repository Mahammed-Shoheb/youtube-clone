import { Skeleton, Stack } from '@mui/material';
import ChannelCard from '../components/ChannelCard';
import SearchVideoCard from '../components/SearchVideoCard';
import { fetchFromAPI } from '../utility/fetchFromAPI';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useScrollToTop from '../utility/useScrollToTop';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('search_query');
  const [videos, setVideos] = useState(null);
  const count = new Array(6).fill(0);
  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?q=${q}&part=snippet%2Cid&order=date`).then((data) =>
      setVideos(data.items)
    );
  }, [q]);
  useScrollToTop();
  if (!videos) {
    return (
      <Stack p={2}>
        {count.map((_, index) => {
          return (
            <Stack direction={'row'} mb={2} gap={3} key={index}>
              <Skeleton height={160} width={250} variant='rounded' />
              <Stack gap={3}>
                <Skeleton width={240} height={'2rem'} />
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                  <Skeleton width={40} height={40} variant='circular' />
                  <Skeleton width={80} height={'1rem'} />
                </Stack>
                <Skeleton width={160} />
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    );
  }

  return (
    <Stack p={1}>
      {videos.map((item, index) => {
        return (
          <Stack key={index}>
            {item.id.videoId && <SearchVideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Stack>
        );
      })}
    </Stack>
  );
};
export default SearchPage;
