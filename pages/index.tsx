import type { NextPage } from 'next';

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import DoughnutChart from '../components/DoughnutChart/DoughnutChart';

let theme = createTheme();
theme = responsiveFontSizes(theme);

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
        <ThemeProvider theme={theme}>
          <Typography
            variant='h1'
            align='center'
          >
            Free Juniors
          </Typography>
        </ThemeProvider>
        <Box width={{ xs: '300px', sm: '600px' }}>
          <DoughnutChart />
        </Box>
        <Stack
          direction={{ sm: 'row' }}
          spacing={{ xs: 4 }}
        >
          <Button variant='outlined'>Я Джуниор</Button>
          <Button variant='outlined'>Я Наниматель</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
