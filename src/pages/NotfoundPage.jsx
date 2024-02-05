import { Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <Container
      maxWidth={'lg'}
      sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}
    >
      <Stack sx={{ width: '50%', textAlign: 'center' }}>
        <Typography variant='h3' component={'h1'} sx={{ mb: 2 }}>
          Sorry, We could not find this page
        </Typography>
        <div>
          <Link
            to={'/'}
            style={{
              padding: '0.75rem 1.25rem',
              background: 'red',
              textDecoration: 'none',
              color: 'black',
              borderRadius: 10,
            }}
          >
            <Typography component={'span'}>Home Page</Typography>
          </Link>
        </div>
      </Stack>
    </Container>
  );
};
export default NotfoundPage;
