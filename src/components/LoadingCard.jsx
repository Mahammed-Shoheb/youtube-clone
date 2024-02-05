import { Skeleton, Stack } from '@mui/material';

const LoadingCard = () => {
  return (
    <Stack gap={2}>
      <Skeleton variant='rounded' width={300} height={150} />
      <Stack direction={'row'} gap={1}>
        <Skeleton variant='circular' width={40} height={40} />
        <Stack>
          <Skeleton variant='text' width={250} />
          <Skeleton variant='text' width={200} />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default LoadingCard;
