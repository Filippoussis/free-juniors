import type { NextPage } from 'next';

import { Button, Container, Stack, Typography } from '@mui/material';
import DoughnutChart from '../components/DoughnutChart/DoughnutChart';

const Home: NextPage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
      }}
    >
      <Stack
        height='100%'
        justifyContent='space-evenly'
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
        <Stack direction={{ sm: 'row' }} spacing={{ xs: 4}}>
          <Button variant='outlined'>Я Джуниор</Button>
          <Button variant='outlined'>Я Наниматель</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
