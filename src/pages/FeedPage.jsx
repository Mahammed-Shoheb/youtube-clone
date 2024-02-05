import { Box } from '@mui/material';
import Categories from '../components/Categories';
import FeedVideos from '../components/FeedVideos';
import { useGlobalContext } from '../utility/context';
import { fetchFromAPI } from '../utility/fetchFromAPI';
import { useEffect, useState } from 'react';

const FeedPage = () => {
  const [videos, setVideos] = useState(null);
  const { selectedCategory } = useGlobalContext();
  useEffect(() => {
    fetchFromAPI(
      `search?q=${selectedCategory}&part=snippet%2Cid&regionCode=IN&order=date`
    ).then((data) => setVideos(data.items));
  }, [selectedCategory]);
  return (
    <Box px={3} py={1}>
      <Categories />
      <FeedVideos videos={videos} />
    </Box>
  );
};
export default FeedPage;
