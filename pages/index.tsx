import type { NextPage } from 'next';

import { Container, Stack, Typography } from '@mui/material';
import DoughnutChart from '../components/DoughnutChart/DoughnutChart';

const Home: NextPage = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        height: '100vh',
        backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
      }}
    >
      <Stack
        spacing={4}
        alignItems='center'
      >
        <Typography
          variant='h1'
          align='center'
        >
          Free Juniors
        </Typography>
        <Container maxWidth='sm'>
          <DoughnutChart />
        </Container>
      </Stack>
    </Container>
  );
};

export default Home;
