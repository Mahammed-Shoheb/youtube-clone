import { Grid } from '@mui/material';
import FeedVideoCard from './FeedVideoCard';
import LoadingCard from './LoadingCard';

const FeedVideos = ({ videos }) => {
  // if (!videos) return <h1>Loading..</h1>;
  const count = new Array(6).fill(0);

  if (!videos) {
    return (
      <Grid
        container
        rowSpacing={4}
        columnSpacing={2}
        columns={{ xs: 1, sm: 2, lg: 3, xl: 6 }}
        wrap='wrap'
      >
        {count.map((_, index) => {
          return (
            <Grid item xs={1} sm={1} lg={1} xl={1} key={index}>
              <LoadingCard key={index} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={2}
      columns={{ xs: 1, sm: 2, lg: 3, xl: 6 }}
      wrap='wrap'
    >
      {videos.map((video, index) => {
        return (
          <Grid item xs={1} sm={1} lg={1} xl={1} key={index}>
            <FeedVideoCard video={video} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default FeedVideos;
